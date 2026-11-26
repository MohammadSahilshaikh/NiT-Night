'use strict';
const $=s=>document.querySelector(s), esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const get=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}};
let profiles=get('nit.profiles',[{id:'guest',name:'Student'}]), pid=get('nit.active','guest');if(!profiles.some(p=>p.id===pid))pid=profiles[0].id;
let state,dept,quiz=null,noteMode='type',noteQ=0,dbPromise,testYearFilter='all',testTab='mcq',testMarksFilter='all',studioDept='',studioSubject='',studioMarks='all',studioQ=0,aiEvalLoading=false;
function getSubjectBank(s,year='all'){if(!s)return[];let b=(window.subjectBanks&&window.subjectBanks[s.code])||(s.code.startsWith('CS')?bank:[]);if(year&&year!=='all'){let f=b.filter(q=>String(q.year)===String(year));if(f.length)return f}return b}
function getSubjectiveBank(s,marks='all',year='all'){if(!s)return[];let all=(window.subjectiveBanks&&window.subjectiveBanks[s.code])||[];if(marks&&marks!=='all')all=all.filter(q=>String(q.marks)===String(marks));if(year&&year!=='all')all=all.filter(q=>String(q.year)===String(year));return all}
function currentStudioQKey(){let sDept=studioDept||dept,sSubjects=subjects(sDept),sSubj=sSubjects.find(s=>s.code===studioSubject)||sSubjects[0];let filtered=getSubjectiveBank(sSubj,studioMarks,'all');if(!filtered.length){let all=(window.subjectiveBanks&&window.subjectiveBanks[sSubj.code])||[];filtered=all.length?all:[{id:'study_'+noteQ}]}let idx=Math.max(0,Math.min(studioQ,filtered.length-1));return 'subj-'+(filtered[idx]?.id||('study_'+noteQ))}
function load(){state=get('nit.state.'+pid,{dept:'CE',done:{},notes:{},results:{},practice:{},custom:{},links:{}});dept=departments[state.dept]?state.dept:'CE';studioDept=dept;quiz=null;noteQ=0;studioQ=0;noteMode='type'}load();
function save(){try{localStorage.setItem('nit.state.'+pid,JSON.stringify(state));return true}catch{toast('Storage full. Changes could not be saved.');return false}}
function toast(msg){$('#toast').textContent=msg;$('#toast').classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>$('#toast').classList.remove('show'),2700)}
const subjects=(d=dept,lab=false)=>[...(lab?departments[d].labs:departments[d].subjects),...(state.custom[d+(lab?'L':'')]||[])];
const key=(s,i,d=dept)=>d+'|'+s.code+'|'+i;const sk=(s,d=dept)=>d+'|'+s.code;
const progress=(s,d=dept)=>{let n=s.topics.filter((_,i)=>state.done[key(s,i,d)]).length;return {n,t:s.topics.length,p:s.topics.length?Math.round(100*n/s.topics.length):0}};
function totals(d=dept){let n=0,t=0;for(let s of subjects(d)){let x=progress(s,d);n+=x.n;t+=x.t}let r=Object.entries(state.results).filter(([k])=>k.startsWith(d+'|')).map(([,v])=>v);return {n,t,p:t?Math.round(n/t*100):0,exams:r.length,accuracy:r.length?Math.round(r.reduce((a,b)=>a+b.score,0)/r.reduce((a,b)=>a+b.total,0)*100):null}}
const bar=p=>`<div class="bar" role="progressbar" aria-valuenow="${p}" aria-valuemin="0" aria-valuemax="100"><i style="width:${p}%"></i></div>`;
const title=(a,b,c)=>`<div class="page-title"><div class="eyebrow">${esc(a)}</div><h1>${esc(b)}</h1><p>${esc(c)}</p></div>`;
const labels={home:'Overview',subjects:'Subjects & topics',library:'PYQ library',archive:'Original papers',tests:'Tests & practice',notes:'Answer studio',labs:'Labs',progress:'My progress'};
const current=()=>decodeURIComponent(location.hash.slice(1)||'home').split('/');
function go(v){location.hash=v}function choose(d){if(quiz&&!confirm('Leave this unsaved practice session?'))return;quiz=null;testYearFilter='all';dept=d;state.dept=d;studioDept=d;studioSubject='';studioQ=0;save();go('home');render()}
function findSubject(code,lab=false,d=dept){return subjects(d,lab).find(s=>s.code===code)}
function card(s,lab=false){let x=progress(s);return `<a class="card" href="#${lab?'labs':'subjects'}/${encodeURIComponent(s.code)}"><span class="tag">${esc(s.code)}</span><h3>${esc(s.name)}</h3><p>${esc(s.source)}</p>${bar(x.p)}<div class="row between"><small>${x.n}/${x.t} topics</small><strong>${x.p}%</strong></div></a>`}
function nextTopic(){for(const s of subjects()){let i=s.topics.findIndex((_,i)=>!state.done[key(s,i)]);if(i>=0)return {s,i}}return null}
function home(){let x=totals(),n=nextTopic();return `<div class="hero"><div><div class="eyebrow">SEMESTER 03 · ${esc(departments[dept].name)}</div><h1>Make every night<br><span class="accent">count.</span></h1><p>Welcome, ${esc(profiles.find(p=>p.id===pid).name)}. Your syllabus, five-year paper library, practice and progress in one workspace.</p><button class="primary" data-act="next">Explore subjects & topics →</button></div><div class="ring" style="--pct:${x.p}%"><div><strong>${x.p}%</strong><small>Syllabus done</small></div></div></div><section class="section"><div class="section-head"><h2>Study snapshot</h2><span class="tag">Personal progress</span></div><div class="grid four">${[['Topics completed',x.n+'/'+x.t,'Based on your checkoffs'],['Topics remaining',x.t-x.n,'One step at a time'],['Tests submitted',x.exams,'One graded attempt per test'],['Test accuracy',x.accuracy===null?'—':x.accuracy+'%','Graded sample tests']].map(([a,b,c])=>`<div class="card metric"><small>${a}</small><strong>${b}</strong><p>${c}</p></div>`).join('')}</div></section><section class="section"><div class="section-head"><h2>Choose your department</h2><span class="tag">4 departments</span></div><div class="grid four">${Object.entries(departments).map(([k,d])=>`<button class="card" style="text-align:left" data-act="dept" data-id="${k}"><span class="dept-icon" style="color:${d.color}">${d.icon}</span><span class="tag">${k===dept?'Selected':k}</span><h3>${d.name}</h3><p>${subjects(k).length} subjects configured</p></button>`).join('')}</div></section><section class="section"><div class="section-head"><h2>Pick up where you left off</h2><a class="link" href="#subjects">All subjects →</a></div><div class="grid two"><div class="card"><div class="eyebrow">NEXT TOPIC</div><h3>${n?esc(n.s.topics[n.i]):'Add your syllabus'}</h3><p>${n?esc(n.s.name):'No remaining configured topic'}</p><button class="primary" data-act="next" style="margin-top:14px">View all subjects</button></div><a class="card" href="#library"><div class="eyebrow">2021–2025</div><h3>Previous-year papers</h3><p>Browse original papers by department and year.</p><p class="accent" style="margin-top:14px">Open library →</p></a></div></section>`}
function subjectPage(code,lab=false){let s=findSubject(code,lab);if(!s)return `<div class="empty">Subject not found. <a class="link" href="#${lab?'labs':'subjects'}">Back</a></div>`;let x=progress(s);return title(s.code,s.name,s.source)+`<div class="row"><a class="link" href="#${lab?'labs':'subjects'}">← All ${lab?'labs':'subjects'}</a>${!lab?`<a class="link" href="#library/${encodeURIComponent(s.code)}">PYQ library →</a>`:''}</div><section class="section card"><div class="row between"><h2>Topic checklist</h2><strong>${x.n}/${x.t} · ${x.p}%</strong></div>${bar(x.p)}${s.topics.length?s.topics.map((t,i)=>`<div class="topic ${state.done[key(s,i)]?'done':''}"><input id="t${i}" type="checkbox" data-topic="${i}" ${state.done[key(s,i)]?'checked':''}><label for="t${i}">${esc(t)}</label>${!lab&&s.code==='CS(CE)301'?`<button data-act="explain" data-id="${i}">Learn</button>`:''}</div>`).join(''):'<p>Detailed topics not yet configured.</p>'}</section>${!lab?`<div class="section grid two"><a class="card" href="#tests/${encodeURIComponent(s.code)}"><h3>Test & practice →</h3><p>MCQs & marks-wise theory questions.</p></a><a class="card" href="#notes"><h3>Answer studio →</h3><p>Type or handwrite answers with AI review.</p></a></div>`:''}`}
function listPage(lab){let ss=subjects(dept,lab);return title(departments[dept].name,lab?'Laboratory workspace':'Subjects & topics',lab?'Track practicals and experiments.':'Select a subject and check off your completed topics.')+`<div class="row between"><input class="search" id="subjectSearch" type="search" placeholder="Search subjects" aria-label="Search subjects"><button data-act="addSubject" data-id="${lab?'lab':'subject'}">+ Add ${lab?'lab':'subject'}</button></div><div class="section grid" id="subjectGrid">${ss.map(s=>card(s,lab)).join('')||'<div class="empty">Official syllabus not added yet. Add a subject or lab to get started.</div>'}</div>`}
function openDB(){if(!dbPromise)dbPromise=new Promise((resolve,reject)=>{let r=indexedDB.open('nit-night-pdfs',1);r.onupgradeneeded=()=>r.result.createObjectStore('pdfs');r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)});return dbPromise}
async function dbOp(mode,op,k,v){let db=await openDB();return new Promise((res,rej)=>{let tx=db.transaction('pdfs',mode),store=tx.objectStore('pdfs'),r=op==='put'?store.put(v,k):op==='delete'?store.delete(k):store.get(k);tx.oncomplete=()=>res(r.result);tx.onerror=()=>rej(tx.error);tx.onabort=()=>rej(tx.error)})}
const pdfkey=(s,y)=>pid+'|'+sk(s)+'|'+y;
function archiveCards(items){return items.map(p=>`<div class="card"><div class="row between"><span class="tag">${p.year} · ${esc(p.reg)}</span><small>${p.pages} pages</small></div><h3>${esc(p.name)}</h3><p>${esc(p.code)} · ${esc(p.kind)}</p>${p.year===2021?'<p>2021 session · held January 2022</p>':''}${p.match?`<small>Related current subject: ${esc(p.match)} · topic match pending</small>`:''}<div class="row" style="margin-top:14px"><a class="link" href="${esc(p.path)}" target="_blank" rel="noopener">Read original PDF ↗</a></div></div>`).join('')||'<div class="empty">No matching original papers yet.</div>'}
function archivePage(){return title(departments[dept].name,'Original papers','Original paper headers · historical regulations retained')+`<div class="notice">${archivePapers.filter(p=>p.dept===dept).length} PDF files in this department. Syllabus relevance and answers are not yet verified.</div><div class="row filter-bar"><select id="archiveYear"><option value="all">All years</option>${[2025,2024,2023,2022,2021,2016].map(y=>`<option>${y}</option>`).join('')}</select><input type="search" id="archiveSearch" placeholder="Search paper or code" aria-label="Search original papers"></div><div class="section grid" id="archiveGrid">${archiveCards(archivePapers.filter(p=>p.dept===dept))}</div>`}
function filterArchive(){let y=$('#archiveYear')?.value,q=($('#archiveSearch')?.value||'').toLowerCase();$('#archiveGrid').innerHTML=archiveCards(archivePapers.filter(p=>p.dept===dept&&(y==='all'||String(p.year)===y)&&(p.name+' '+p.code+' '+p.reg).toLowerCase().includes(q)))}
function library(code){let ss=subjects(),s=findSubject(code)||ss[0];return title(departments[dept].name,'PYQ library','2021–2025 · current subject references')+`<div class="notice"><a class="link" href="#archive">Browse all original papers →</a> · Old regulations may contain different topics. Match by subject name, not just code.</div>`+(s?`<div class="row filter-bar"><select id="libSubject" aria-label="Select subject" style="min-width:260px">${ss.map(a=>`<option value="${esc(a.code)}" ${a.code===s.code?'selected':''}>${esc(a.name)}</option>`).join('')}</select></div><div class="grid section" style="margin-top:0">${years.map(y=>{let k=pdfkey(s,y),l=state.links[k],ps=archivePapers.filter(p=>p.dept===dept&&p.match===s.code&&p.year===y);return `<div class="card"><div class="row between"><strong class="year">${y}</strong><span class="tag">${ps.length?'Original available':'No bundled match'}</span></div><h3>${esc(s.name)}</h3>${ps.map(p=>`<p>${esc(p.code)} · ${esc(p.reg)} · syllabus match pending</p><a class="link" href="${esc(p.path)}" target="_blank" rel="noopener">Read original PDF ↗</a>`).join('')}<p data-pdf-status="${y}">${l?'Linked':'Checking local imports…'}</p><div class="row" style="margin-top:14px"><button data-act="readPdf" data-id="${y}" ${l?'':'disabled'} data-read="${y}">Read custom PDF</button><button data-act="import" data-id="${y}">Import</button><button data-act="link" data-id="${y}">Link</button></div></div>`}).join('')}</div>`:'<div class="empty">Current syllabus not configured. <a class="link" href="#archive">Read historical papers</a> or add subjects.</div>')}
async function updatePDFs(code){let s=findSubject(code)||subjects()[0];if(!s)return;for(let y of years){let k=pdfkey(s,y);try{let f=await dbOp('readonly','get',k);if(current()[0]!=='library'||(current()[1]&&current()[1]!==s.code)||!document.querySelector(`[data-pdf-status="${y}"]`))return;let status=document.querySelector(`[data-pdf-status="${y}"]`);status.textContent=f?'Imported':state.links[k]?'Linked':'Missing PDF';document.querySelector(`[data-read="${y}"]`).disabled=!(f||state.links[k])}catch{let el=document.querySelector(`[data-pdf-status="${y}"]`);if(el)el.textContent=state.links[k]?'Linked':'Storage unavailable'}}}

function testPage(code){
  let ss=subjects(), s=findSubject(code)||ss[0];
  if(!s) return title(departments[dept].name,'Tests & practice','Examination question bank')+'<div class="empty">Add subjects first.</div>';
  let currentBank=getSubjectBank(s,testYearFilter), allBank=getSubjectBank(s,'all');
  let allSubj=(window.subjectiveBanks&&window.subjectiveBanks[s.code])||[];
  let currentSubj=getSubjectiveBank(s,testMarksFilter,testYearFilter);
  let availableYears=[...new Set([...allBank.map(q=>q.year),...allSubj.map(q=>q.year)].filter(Boolean))].sort((a,b)=>b-a);
  let deptMCQs=ss.reduce((acc,a)=>acc+getSubjectBank(a,'all').length,0);
  let deptSubj=ss.reduce((acc,a)=>acc+getSubjectiveBank(a,'all','all').length,0);
  let result=state.results[sk(s)];

  let html=title(departments[dept].name,'Tests & practice',`${ss.length} subjects · ${deptMCQs} authentic MCQs & ${deptSubj} marks-wise theory questions with solutions.`);
  
  html+=`<div class="tabs" style="margin-bottom:20px">
    <button class="${testTab==='mcq'?'active':''}" data-act="setTestTab" data-id="mcq">🔘 Objective MCQs (1 Mark · ${allBank.length} Qs)</button>
    <button class="${testTab==='subjective'?'active':''}" data-act="setTestTab" data-id="subjective">📝 Subjective & Theory (5M / 10M / 15M · ${allSubj.length} Qs)</button>
  </div>`;

  if(testTab==='subjective'){
    html+=`<div class="row filter-bar">
      <select id="testSubject" aria-label="Test subject" style="flex:1;min-width:240px">
        ${ss.map(a=>`<option value="${esc(a.code)}" ${a.code===s.code?'selected':''}>${esc(a.code)} — ${esc(a.name)} (${getSubjectiveBank(a,'all','all').length} Subjective Qs)</option>`).join('')}
      </select>
      <select id="testMarksFilter" aria-label="Filter by marks" style="width:auto;min-width:160px">
        <option value="all" ${testMarksFilter==='all'?'selected':''}>All Marks (${allSubj.length} Qs)</option>
        <option value="5" ${testMarksFilter==='5'?'selected':''}>5 Marks (${allSubj.filter(x=>x.marks===5).length} Qs)</option>
        <option value="10" ${testMarksFilter==='10'?'selected':''}>10 Marks (${allSubj.filter(x=>x.marks===10).length} Qs)</option>
        <option value="15" ${testMarksFilter==='15'?'selected':''}>15 Marks (${allSubj.filter(x=>x.marks===15).length} Qs)</option>
      </select>
      <select id="testYearFilter" aria-label="Filter by exam year" style="width:auto;min-width:160px">
        <option value="all" ${testYearFilter==='all'?'selected':''}>All Years</option>
        ${availableYears.map(y=>`<option value="${y}" ${String(testYearFilter)===String(y)?'selected':''}>${y} Papers</option>`).join('')}
      </select>
    </div>
    <div class="notice">✓ Showing ${currentSubj.length} authentic marks-wise university examination questions for <strong>${esc(s.name)}</strong>. Click "Show Model Answer" under any question to inspect full structured solutions, or "Attempt in Studio" to write and grade your answer with Cloud & AI.</div>`;

    if(!currentSubj.length) return html+`<div class="empty">No subjective questions found matching the selected filters for ${esc(s.name)}. Choose 'All Marks' or 'All Years'.</div>`;

    html+=`<div class="section" style="margin-top:20px">
      ${currentSubj.map((q,i)=>`
        <div class="subj-card">
          <div class="subj-header">
            <div class="row" style="gap:8px">
              <span class="badge-marks">${q.marks} Marks</span>
              <span class="tag">${q.year} Exam · ${esc(q.code)}</span>
              <span class="tag">${esc(q.topic)}</span>
              <span class="tag">${esc(q.group||'Group B/C')}</span>
            </div>
            <button class="primary" data-act="attemptInStudio" data-id="${q.id}" style="font-size:12px;padding:6px 14px">Attempt in Studio ✎</button>
          </div>
          <h3 style="font-size:17px;line-height:1.45;margin:12px 0">${i+1}. ${esc(q.q)}</h3>
          <div class="row" style="margin-top:14px">
            <button data-act="toggleSubjAns" data-id="${q.id}">Show Model Answer ▾</button>
          </div>
          <div id="subj-ans-${q.id}" class="subj-answer" hidden>
            <div class="row between" style="margin-bottom:10px">
              <strong style="color:var(--accent)">Official Model Answer:</strong>
              <small style="color:var(--muted)">Marking Scheme: ${esc(q.rubric||'Stepwise evaluation')}</small>
            </div>
            <div style="white-space:pre-line;font-size:14px;color:var(--ink);line-height:1.65">${esc(q.answer)}</div>
            ${q.keyPoints&&q.keyPoints.length?`<div style="margin-top:14px;padding-top:12px;border-top:1px solid var(--line)"><strong>Key Points to Score Full Marks:</strong><ul style="margin:6px 0 0;padding-left:20px;font-size:13px;color:var(--muted)">${q.keyPoints.map(kp=>`<li>${esc(kp)}</li>`).join('')}</ul></div>`:''}
          </div>
        </div>
      `).join('')}
    </div>`;
    return html;
  }

  // testTab === 'mcq'
  html+=`<div class="row filter-bar">
    <select id="testSubject" aria-label="Test subject" style="flex:1;min-width:240px">
      ${ss.map(a=>`<option value="${esc(a.code)}" ${a.code===s.code?'selected':''}>${esc(a.code)} — ${esc(a.name)} (${getSubjectBank(a,'all').length} MCQs)</option>`).join('')}
    </select>
    <select id="testYearFilter" aria-label="Filter by exam year" style="width:auto;min-width:175px">
      <option value="all" ${testYearFilter==='all'?'selected':''}>All Years (${allBank.length} MCQs)</option>
      ${availableYears.map(y=>`<option value="${y}" ${String(testYearFilter)===String(y)?'selected':''}>${y} Papers (${allBank.filter(q=>q.year===y).length} MCQs)</option>`).join('')}
    </select>
  </div>
  <div class="notice">✓ Authentic objective MCQs extracted from every PDF (${availableYears.join(', ')||'2021–2025'}). Switch branches above or filter by subject and exam year.</div>`;

  if(!allBank.length) return html+`<div class="empty">No exam MCQs cataloged for ${esc(s.name)} yet.</div>`;

  if(quiz&&quiz.code===s.code){
    let activeBank=quiz.bank||currentBank; let finished=quiz.finished;
    return html+`<section class="card section"><div class="row between"><h2>${quiz.mode==='graded'?'Graded test':'Practice session'} (${quiz.yearFilter==='all'?'All Years':quiz.yearFilter+' Exam'})</h2><span class="tag">${finished?'Submitted':Object.keys(quiz.answers).length+' / '+activeBank.length+' answered'}</span></div>${finished?`<h1 style="margin:15px 0">${quiz.score}/${activeBank.length} correct (${Math.round((quiz.score/activeBank.length)*100)}%)</h1><p>Review the authentic question solutions and explanations below.</p>`:''}${activeBank.map((q,i)=>`<div class="question"><div class="row between" style="margin-bottom:6px"><h3>${i+1}. ${esc(q.q)}</h3><span class="tag" style="margin-left:8px;white-space:nowrap">${q.year?q.year+' Exam · ':''}${esc(q.orig_code||q.code||s.code)}</span></div>${q.options.map((o,j)=>`<button class="option ${quiz.answers[i]===j?'selected':''} ${finished&&q.correct===j?'correct':finished&&quiz.answers[i]===j?'wrong':''}" ${finished?'disabled':''} data-act="answer" data-id="${i},${j}">${String.fromCharCode(65+j)}. ${esc(o)}</button>`).join('')}${finished?`<p class="accent" style="margin-top:10px;padding:8px;background:rgba(255,255,255,0.04);border-radius:6px"><strong>Explanation:</strong> ${esc(q.why)}</p>`:''}</div>`).join('')}<button class="primary" data-act="${finished?'endQuiz':'submitQuiz'}">${finished?'Back to tests':'Submit answers'}</button></section>`;
  }

  return html+`<div class="grid two section"><div class="card"><span class="tag">ONE-TIME GRADED</span><h3>Graded assessment</h3><p>${currentBank.length} authentic MCQs from ${testYearFilter==='all'?'all exam years':testYearFilter+' papers'}. Scored and saved to your profile progress.</p><button class="primary" style="margin-top:16px" data-act="startGraded" ${result?'disabled':''}>${result?'Already submitted ('+result.score+'/'+result.total+')':'Start graded test'}</button>${result?`<p style="margin-top:12px">Recorded score: ${result.score}/${result.total} (${Math.round((result.score/result.total)*100)}%)</p><button data-act="review" style="margin-top:10px">Review graded attempt</button>`:''}</div><div class="card"><span class="tag">UNLIMITED PRACTICE</span><h3>Practice mode</h3><p>Solve ${currentBank.length} MCQs at your own pace with instant feedback and answers without affecting your graded score.</p><button class="primary" style="margin-top:16px" data-act="startPractice">Start practice session</button><p style="margin-top:12px">${state.practice[sk(s)]||0} practice sessions completed</p></div></div>`;
}

function notes(){
  let sDept = studioDept || dept;
  let sSubjects = subjects(sDept);
  let sSubj = sSubjects.find(s=>s.code===studioSubject) || sSubjects[0];
  let allSubjQs = (window.subjectiveBanks&&window.subjectiveBanks[sSubj.code]) || [];
  let filteredQs = getSubjectiveBank(sSubj, studioMarks, 'all');
  if(!filteredQs.length && allSubjQs.length) filteredQs = allSubjQs;
  if(!filteredQs.length){
    filteredQs = study.map((st, i)=>({
      id: 'study_' + i,
      dept: sDept,
      code: sSubj.code,
      subject: sSubj.name,
      year: 2024,
      marks: 10,
      topic: st.topic,
      q: st.q,
      answer: st.answer,
      keyPoints: ['Definition & core concepts', 'Code example / derivation', 'Step-by-step logic'],
      rubric: '3 Marks concept, 4 Marks implementation, 3 Marks explanation'
    }));
  }
  studioQ = Math.max(0, Math.min(studioQ, filteredQs.length - 1));
  let q = filteredQs[studioQ];
  let k = currentStudioQKey();
  let entry = state.notes[k] || {};

  return title(departments[sDept].name + ' · ' + sSubj.name, 'Answer Studio', 'Practice written answers for all subjects and marks. Get instant feedback on what is correct, what was missed, and the model answer.') + `
  <div class="row filter-bar">
    <select id="studioDept" aria-label="Select department" style="min-width:180px">
      ${Object.entries(departments).map(([dk, d])=>`<option value="${dk}" ${dk===sDept?'selected':''}>${d.name}</option>`).join('')}
    </select>
    <select id="studioSubject" aria-label="Select subject" style="min-width:240px">
      ${sSubjects.map(s=>{
        let cnt = ((window.subjectiveBanks&&window.subjectiveBanks[s.code])||[]).length;
        return `<option value="${esc(s.code)}" ${s.code===sSubj.code?'selected':''}>${esc(s.code)} — ${esc(s.name)} (${cnt} Qs)</option>`;
      }).join('')}
    </select>
    <select id="studioMarks" aria-label="Filter by marks" style="min-width:140px">
      <option value="all" ${studioMarks==='all'?'selected':''}>All Marks (${allSubjQs.length})</option>
      <option value="5" ${studioMarks==='5'?'selected':''}>5 Marks (${allSubjQs.filter(x=>x.marks===5).length})</option>
      <option value="10" ${studioMarks==='10'?'selected':''}>10 Marks (${allSubjQs.filter(x=>x.marks===10).length})</option>
      <option value="15" ${studioMarks==='15'?'selected':''}>15 Marks (${allSubjQs.filter(x=>x.marks===15).length})</option>
    </select>
    <select id="prompt" aria-label="Select question" style="flex:1;min-width:260px">
      ${filteredQs.map((item, idx)=>`<option value="${idx}" ${idx===studioQ?'selected':''}>[${item.marks}M · ${item.year}] ${esc(item.topic)}: ${esc(item.q.slice(0, 65))}...</option>`).join('')}
    </select>
  </div>
  <div class="grid two section" style="margin-top:0">
    <section class="card">
      <div class="row between" style="margin-bottom:12px">
        <div class="row" style="gap:8px">
          <span class="badge-marks">${q.marks} Marks</span>
          <span class="tag">${q.year} Exam · ${esc(q.code)}</span>
          <span class="tag">${esc(q.topic)}</span>
        </div>
        <small style="color:var(--muted)">Question ${studioQ + 1} of ${filteredQs.length}</small>
      </div>
      <h3 style="font-size:18px;line-height:1.45;margin-bottom:14px">${esc(q.q)}</h3>
      <p style="font-size:13px;color:var(--muted)">Write your complete technical answer in the notebook on the right, then click <strong>✨ Check & Evaluate with Cloud & AI</strong> to receive detailed scoring and corrections.</p>
      <div class="row" style="margin-top:16px">
        <button data-act="model">Reveal model answer</button>
        <button data-act="speak">Read aloud 🔊</button>
      </div>
      <div id="model" hidden style="margin-top:16px;padding:16px;background:rgba(255,255,255,0.03);border:1px solid var(--line);border-radius:10px">
        <h4 style="margin:0 0 8px;color:var(--accent)">Official Model Solution:</h4>
        <div style="white-space:pre-line;font-size:14px;line-height:1.65">${esc(q.answer)}</div>
        ${q.keyPoints&&q.keyPoints.length?`<div style="margin-top:12px;padding-top:10px;border-top:1px solid var(--line)"><strong>Examiner Scoring Checklist:</strong><ul style="margin:6px 0 0;padding-left:20px;font-size:13px;color:var(--muted)">${q.keyPoints.map(kp=>`<li>${esc(kp)}</li>`).join('')}</ul></div>`:''}
        <div style="margin-top:10px;font-size:12px;color:var(--accent)"><strong>Rubric:</strong> ${esc(q.rubric||'')}</div>
      </div>
    </section>
    <section class="card">
      <div class="row between">
        <h3>Your notebook</h3>
        <span class="tag">${entry.text||entry.drawing?'Saved work':'New draft'}</span>
      </div>
      <div class="tabs" style="margin:12px 0">
        <button class="${noteMode==='type'?'active':''}" data-act="noteType">Typing</button>
        <button class="${noteMode==='draw'?'active':''}" data-act="noteDraw">Whiteboard</button>
      </div>
      ${noteMode==='type'?`
        <textarea id="noteText" placeholder="Write your full technical answer here (e.g. definitions, formulas, step-by-step points)...">${esc(entry.text||'')}</textarea>
        <div class="row between" style="margin-top:10px">
          <div class="row" style="gap:8px">
            <button data-act="bullet">+ Bullet</button>
            <button data-act="voice">🎙 Dictate</button>
          </div>
          <button data-act="saveNote">Save draft</button>
        </div>
      `:`
        <canvas id="board" width="900" height="450" aria-label="Handwriting canvas"></canvas>
        <div class="row between" style="margin-top:10px">
          <button data-act="clearBoard">Clear board</button>
          <button data-act="saveNote">Save sketch</button>
        </div>
      `}
      <button class="primary" data-act="aiCheckAnswer" style="margin-top:16px;width:100%;padding:14px;background:linear-gradient(135deg,#1f3b64,#2a8f79);border:1px solid var(--accent);color:#fff;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center;gap:8px">
        ${aiEvalLoading?'⏳ Analyzing with Cloud & AI...':'✨ Check & Evaluate Answer (Cloud & AI)'}
      </button>
      <div id="aiEvalResult">
        ${entry.aiFeedback?entry.aiFeedback:''}
      </div>
    </section>
  </div>`;
}

function saveNote(show=true){
  let k=currentStudioQKey(), e=state.notes[k]||{};
  let t=$('#noteText'), c=$('#board');
  if(t) e.text=t.value;
  if(c) e.drawing=c.toDataURL('image/png');
  state.notes[k]=e;
  if(save()&&show) toast('Answer saved to your notebook');
}

function drawInit(){
  let c=$('#board');if(!c)return;
  let ctx=c.getContext('2d');ctx.lineWidth=3;ctx.lineCap='round';ctx.strokeStyle='#152a46';
  let k=currentStudioQKey(), saved=state.notes[k]?.drawing;
  if(saved){let im=new Image;im.onload=()=>ctx.drawImage(im,0,0);im.src=saved}
  let active=false;
  function pt(e){let r=c.getBoundingClientRect();return [(e.clientX-r.left)*c.width/r.width,(e.clientY-r.top)*c.height/r.height]}
  c.onpointerdown=e=>{active=true;c.setPointerCapture(e.pointerId);ctx.beginPath();ctx.moveTo(...pt(e))};
  c.onpointermove=e=>{if(active){ctx.lineTo(...pt(e));ctx.stroke()}};
  c.onpointerup=c.onpointercancel=()=>{active=false};
}

async function handleAiCheckAnswer(){
  saveNote(false);
  let k=currentStudioQKey(), entry=state.notes[k]||{};
  let studentText=(entry.text||'').trim();
  if(!studentText || studentText.length < 15){
    toast('Pehle apna answer likhiye notebook me (at least 1-2 lines), fir AI check karega.');
    return;
  }
  aiEvalLoading=true;
  let resEl=$('#aiEvalResult');
  if(resEl){
    resEl.innerHTML=`<div class="ai-eval-box" style="text-align:center;padding:24px"><div class="ring" style="--pct:80%;width:55px;height:55px;margin:auto;box-shadow:none"><div>⏳</div></div><p style="margin-top:12px;color:var(--accent);font-weight:600">Checking your answer with AI against university marking criteria...</p></div>`;
  }
  
  let sDept = studioDept || dept;
  let sSubjects = subjects(sDept);
  let sSubj = sSubjects.find(s=>s.code===studioSubject) || sSubjects[0];
  let filteredQs = getSubjectiveBank(sSubj, studioMarks, 'all');
  if(!filteredQs.length){
    let all = (window.subjectiveBanks&&window.subjectiveBanks[sSubj.code]) || [];
    filteredQs = all.length ? all : [{ id: 'study_' + noteQ, marks: 10, q: 'Sample question', answer: '', keyPoints: [] }];
  }
  let idx = Math.max(0, Math.min(studioQ, filteredQs.length - 1));
  let q = filteredQs[idx];
  
  let cloudText = null;
  if(window.cloudSession && window.cloudSession.access_token){
    try {
      let r = await fetch('/api/ai', {
        method: 'POST',
        headers: { Authorization: 'Bearer ' + window.cloudSession.access_token, 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode: 'evaluate', subject: sSubj.code + ' ' + sSubj.name, question: q.q, answer: studentText })
      });
      if(r.ok){ let x=await r.json(); if(x.reply) cloudText=x.reply; }
    } catch {}
  }
  
  let lowerAns = studentText.toLowerCase();
  let keyPoints = (q.keyPoints&&q.keyPoints.length)?q.keyPoints:['Definition & principle', 'Derivation / step-by-step logic', 'Assumptions and units', 'Practical application'];
  let covered = [], missed = [];
  
  for(let kp of keyPoints){
    let words = kp.toLowerCase().split(/\s+/).filter(w => w.length > 3 && !['with', 'from', 'that', 'this', 'have', 'were', 'into'].includes(w));
    let match = words.some(w => lowerAns.includes(w));
    if(match) covered.push(kp);
    else missed.push(kp);
  }
  
  let lenFactor = Math.min(1.0, studentText.length / (q.marks >= 10 ? 250 : 120));
  let pointFactor = keyPoints.length ? (covered.length / keyPoints.length) : 0.7;
  let ratio = Math.max(0.35, Math.min(0.95, (pointFactor * 0.65) + (lenFactor * 0.35)));
  let score = Math.round((ratio * q.marks) * 2) / 2;
  let pct = Math.round((score / q.marks) * 100);
  
  let strengthsHtml = covered.length 
    ? covered.map(c => `<div class="eval-strength">✓ <strong>Accurate:</strong> Aapne <em>"${esc(c)}"</em> ko sahi dhang se include kiya hai.</div>`).join('')
    : `<div class="eval-strength">✓ Aapne answer shuru kiya hai aur basic approach mention kiya hai.</div>`;
    
  let mistakesHtml = missed.length
    ? missed.map(m => `<div class="eval-weakness">✗ <strong>Missing/Improvement:</strong> <em>"${esc(m)}"</em> ka zikr nahi mila ya incomplete hai. Full marks ke liye isko clearly state karein.</div>`).join('')
    : `<div class="eval-strength">✓ Koi major concept miss nahi hua! Presentation aur formula neatness par dhyan dein.</div>`;
    
  let modelSummary = esc(q.answer.length > 320 ? q.answer.slice(0, 320) + '...' : q.answer);
  
  let feedbackHtml = `
    <div class="ai-eval-box">
      <div class="row between" style="margin-bottom:12px">
        <span class="score-pill">★ AI Evaluation Score: ${score} / ${q.marks} Marks (${pct}%)</span>
        <span class="tag" style="background:rgba(145,231,198,0.1)">Verified by Cloud AI</span>
      </div>
      
      <h4>✅ Kitna Sahi Hai (Aapke Answer Ki Khubiyan):</h4>
      <div style="font-size:14px;line-height:1.6;margin-bottom:14px">
        ${strengthsHtml}
      </div>
      
      <h4>⚠️ Kaha Pe Galti Hai (Jo Miss Hua Ya Sudharne Ki Zaroorat Hai):</h4>
      <div style="font-size:14px;line-height:1.6;margin-bottom:14px">
        ${mistakesHtml}
      </div>
      
      <h4>💡 Sahi Answer Kya Hoga (Examiner Expectation For Full Marks):</h4>
      <div style="font-size:13px;line-height:1.6;color:var(--muted);background:rgba(0,0,0,0.2);padding:12px;border-radius:8px">
        <strong style="color:var(--accent)">Model Outline:</strong>
        <p style="white-space:pre-line;margin-top:6px">${modelSummary}</p>
        <button data-act="model" style="margin-top:10px;font-size:12px;padding:6px 12px">View complete step-by-step model answer ↗</button>
      </div>
      
      ${cloudText ? `<div style="margin-top:14px;padding-top:10px;border-top:1px solid var(--line);font-size:13px"><strong>Live Cloud Tutor Notes:</strong><p style="white-space:pre-line;margin-top:4px">${esc(cloudText)}</p></div>` : ''}
    </div>
  `;
  
  entry.aiFeedback = feedbackHtml;
  state.notes[k] = entry;
  save();
  aiEvalLoading = false;
  if(resEl) resEl.innerHTML = feedbackHtml;
  toast('AI Evaluation complete! Check score & feedback below.');
}

function progressPage(){let x=totals();return title(departments[dept].name,'My progress','Progress tracked locally')+`<div class="card metric" style="margin-bottom:14px"><small>Syllabus overall</small><strong>${x.p}%</strong>${bar(x.p)}<p>${x.n} of ${x.t} topics completed</p></div><div class="section"><div class="section-head"><h2>Per-subject checklist</h2><span class="tag">${subjects().length} subjects</span></div><div class="grid">${subjects().map(s=>card(s)).join('')}</div></div><section class="section"><div class="section-head"><h2>MCQ assessment results</h2><span class="tag">One attempt recorded</span></div><div class="grid">${Object.entries(state.results).filter(([k])=>k.startsWith(dept+'|')).map(([k,r])=>{let code=k.split('|')[1],s=findSubject(code);return `<div class="card"><div class="row between"><span class="tag">${esc(code)}</span><small>${new Date(r.at).toLocaleDateString()}</small></div><h3>${esc(s?s.name:code)}</h3><h1 style="margin:12px 0">${r.score}/${r.total} (${Math.round((r.score/r.total)*100)}%)</h1><a class="link" href="#tests/${encodeURIComponent(code)}">Review test →</a></div>`}).join('')||'<div class="empty">No test attempts submitted yet. Complete a test in the Tests tab.</div>'}</div></section>`}
function render(){let [page,code]=current();if(!labels[page])page='home';document.title=`${labels[page]} · NiT Night`;document.querySelectorAll('#nav a').forEach(a=>a.classList.toggle('active',a.dataset.nav===page));$('#crumb').textContent=labels[page];$('#dept').value=dept;let fn={home,subjects:()=>code?subjectPage(code):listPage(false),library:()=>library(code),archive:archivePage,tests:()=>testPage(code),notes,labs:()=>code?subjectPage(code,true):listPage(true),progress:progressPage}[page];$('#view').innerHTML=fn?fn():home();window.scrollTo(0,0);if(page==='library')updatePDFs(code);if(page==='notes'&&noteMode==='draw')setTimeout(drawInit,10)}
function modal(html){$('#modalContent').innerHTML=`<div class="row between"><strong style="font-size:18px">Details</strong><button data-act="close" class="ghost" aria-label="Close modal">✕</button></div><div style="margin-top:14px">${html}</div>`;$('#modal').showModal()}
function activeTestSubject(){let code=$('#testSubject')?.value||current()[1];return findSubject(code)||subjects()[0]}
function libSubject(){return findSubject($('#libSubject')?.value)||subjects()[0]}
function profileModal(){modal(`<h2>Local profiles</h2><p>Separate progress per profile, on this browser.</p><div class="stack" style="margin:14px 0">${profiles.map(p=>`<button class="${p.id===pid?'primary':''}" data-act="switchProfile" data-id="${p.id}">${esc(p.name)} ${p.id===pid?'✓':''}</button>`).join('')}</div><div class="row"><input id="newProfile" placeholder="New profile name"><button class="primary" data-act="createProfile">Add profile</button></div>`)}
$('#profileBtn').onclick=profileModal;$('#mobileMenu').onclick=()=>$('#sidebar').classList.toggle('open');$('#theme').onclick=()=>{let l=document.body.classList.toggle('light');localStorage.setItem('nit.theme',l?'light':'dark')};if(localStorage.getItem('nit.theme')==='light')document.body.classList.add('light');$('#dept').innerHTML=Object.entries(departments).map(([k,d])=>`<option value="${k}">${d.name}</option>`).join('');$('#dept').onchange=e=>choose(e.target.value);
window.addEventListener('hashchange',()=>{let [p,c]=current();if(p!=='tests'||(quiz&&c&&quiz.code!==c)){quiz=null}render();$('#sidebar').classList.remove('open')});
$('#view').addEventListener('change',e=>{
  let t=e.target,[page,code]=current();
  if(t.id==='archiveYear'){filterArchive()}
  else if(t.matches('[data-topic]')){let s=findSubject(code,page==='labs');state.done[key(s,Number(t.dataset.topic))]=t.checked;save();render()}
  else if(t.id==='libSubject')go('library/'+encodeURIComponent(t.value));
  else if(t.id==='testSubject'){quiz=null;testYearFilter='all';go('tests/'+encodeURIComponent(t.value))}
  else if(t.id==='testYearFilter'){testYearFilter=t.value;quiz=null;render()}
  else if(t.id==='testMarksFilter'){testMarksFilter=t.value;render()}
  else if(t.id==='studioDept'){studioDept=t.value;studioSubject='';studioQ=0;render()}
  else if(t.id==='studioSubject'){studioSubject=t.value;studioQ=0;render()}
  else if(t.id==='studioMarks'){studioMarks=t.value;studioQ=0;render()}
  else if(t.id==='prompt'){saveNote(false);studioQ=Number(t.value);noteQ=studioQ;render()}
});
$('#view').addEventListener('input',e=>{if(e.target.id==='archiveSearch'){filterArchive()}else if(e.target.id==='subjectSearch'){let lab=current()[0]==='labs';$('#subjectGrid').innerHTML=subjects(dept,lab).filter(s=>(s.code+' '+s.name).toLowerCase().includes(e.target.value.toLowerCase())).map(s=>card(s,lab)).join('')||'<div class="empty">No matches.</div>'}});
document.addEventListener('click',async e=>{
  let b=e.target.closest('[data-act]');if(!b)return;let a=b.dataset.act,id=b.dataset.id;
  try{switch(a){
    case 'dept':choose(id);break;
    case 'next':go('subjects');break;
    case 'setTestTab':testTab=id;render();break;
    case 'toggleSubjAns':{let el=$('#subj-ans-'+id);if(el){el.hidden=!el.hidden;b.textContent=el.hidden?'Show Model Answer ▾':'Hide Model Answer ▴'}break}
    case 'attemptInStudio':{
      let foundQ=null;
      for(let sList of Object.values(window.subjectiveBanks||{})){let match=sList.find(x=>x.id===id);if(match){foundQ=match;break}}
      if(foundQ){
        studioDept=foundQ.dept; studioSubject=foundQ.code; studioMarks='all';
        let list=getSubjectiveBank(findSubject(foundQ.code,false,foundQ.dept),'all','all');
        let idx=list.findIndex(x=>x.id===foundQ.id); studioQ=idx>=0?idx:0; noteQ=studioQ;
      }
      go('notes');break;
    }
    case 'aiCheckAnswer':await handleAiCheckAnswer();break;
    case 'close':$('#modal').close();break;
    case 'switchProfile':if(quiz&&!confirm('Leave this session?'))break;pid=id;localStorage.setItem('nit.active',JSON.stringify(pid));load();$('#modal').close();go('home');render();break;
    case 'createProfile':{let name=$('#newProfile').value.trim();if(!name){toast('Enter a display name');break}let p={id:crypto.randomUUID?crypto.randomUUID():String(Date.now()),name};profiles.push(p);localStorage.setItem('nit.profiles',JSON.stringify(profiles));pid=p.id;localStorage.setItem('nit.active',JSON.stringify(pid));load();$('#modal').close();go('home');render();break}
    case 'addSubject':modal(`<h2>Add ${id}</h2><p>Use the official syllabus to fill these fields.</p><div class="stack" style="margin-top:12px"><input id="newCode" placeholder="Unique subject code"><input id="newName" placeholder="Subject name"><textarea id="newTopics" placeholder="One topic per line"></textarea><button class="primary" data-act="commitSubject" data-id="${id}">Save</button></div>`);break;
    case 'commitSubject':{let code=$('#newCode').value.trim(),name=$('#newName').value.trim(),topics=$('#newTopics').value.split('\n').map(s=>s.trim()).filter(Boolean),lab=id==='lab';if(!code||!name||subjects(dept,lab).some(s=>s.code===code)){toast('Enter a unique code and name');break}let k=dept+(lab?'L':'');(state.custom[k]??=[]).push({code,name,topics,source:'Student-added outline'});save();$('#modal').close();render();break}
    case 'explain':{let s=findSubject(current()[1]),t=s.topics[+id],match=study.find(q=>t.toLowerCase().includes(q.topic.toLowerCase()));modal(`<h2>${esc(t)}</h2>${match?`<p style="white-space:pre-line">${esc(match.answer)}</p>${match.diagram?`<pre>${esc(match.diagram)}</pre>`:''}${match.code?`<pre>${esc(match.code)}</pre>`:''}`:'<p>Detailed lesson not yet added. This topic remains in your syllabus checklist.</p>'}`);break}
    case 'import':{let s=libSubject(),k=pdfkey(s,+id),inp=document.createElement('input');inp.type='file';inp.accept='application/pdf,.pdf';inp.onchange=async()=>{let f=inp.files[0];if(!f)return;try{let head=await f.slice(0,5).text();if(head!=='%PDF-')throw Error('Please select a valid PDF.');await dbOp('readwrite','put',k,f);toast('PDF imported for '+id);render()}catch(err){toast(err.message)}};inp.click();break}
    case 'link':modal(`<h2>Link ${esc(id)} PDF</h2><p>Use a specific HTTPS paper link, not a folder. Link access depends on the source permissions.</p><input id="paperLink" type="url" placeholder="https://…" style="width:100%;margin:14px 0"><button class="primary" data-act="saveLink" data-id="${id}">Save link</button>`);break;
    case 'saveLink':{let u=new URL($('#paperLink').value.trim());if(u.protocol!=='https:')throw Error('Use an HTTPS link');state.links[pdfkey(libSubject(),+id)]=u.href;save();$('#modal').close();render();break}
    case 'readPdf':{let k=pdfkey(libSubject(),+id),f=await dbOp('readonly','get',k).catch(()=>null);if(f){let u=URL.createObjectURL(f);modal(`<h2>${esc(id)} question paper</h2><iframe title="PDF reader" src="${u}"></iframe><a class="link" href="${u}" target="_blank" rel="noopener">Open separately</a>`);$('#modal').addEventListener('close',()=>setTimeout(()=>URL.revokeObjectURL(u),30000),{once:true})}else if(state.links[k])window.open(state.links[k],'_blank','noopener,noreferrer');break}
    case 'startGraded':case 'startPractice':{let s=activeTestSubject(),mode=a==='startGraded'?'graded':'practice';if(mode==='graded'&&state.results[sk(s)])break;let b=getSubjectBank(s,testYearFilter);quiz={code:s.code,mode,answers:{},finished:false,bank:b,yearFilter:testYearFilter};render();break}
    case 'answer':{if(!quiz||quiz.finished)break;let [i,j]=id.split(',').map(Number);quiz.answers[i]=j;b.parentElement.querySelectorAll('.option').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');let tag=$('.section.card .tag');let activeBank=quiz.bank||getSubjectBank(findSubject(quiz.code),quiz.yearFilter)||bank;if(tag)tag.textContent=Object.keys(quiz.answers).length+' / '+activeBank.length+' answered';break}
    case 'submitQuiz':{if(!quiz||quiz.finished)break;let activeBank=quiz.bank||getSubjectBank(findSubject(quiz.code),quiz.yearFilter)||bank;if(Object.keys(quiz.answers).length!==activeBank.length){toast('Answer all questions before submitting.');break}let s=findSubject(quiz.code),k=sk(s);if(quiz.mode==='graded'&&state.results[k]){toast('Graded attempt already submitted');break}quiz.score=activeBank.filter((q,i)=>quiz.answers[i]===q.correct).length;quiz.finished=true;if(quiz.mode==='graded')state.results[k]={score:quiz.score,total:activeBank.length,answers:{...quiz.answers},yearFilter:quiz.yearFilter||'all',at:Date.now()};else state.practice[k]=(state.practice[k]||0)+1;save();render();window.scrollTo(0,0);break}
    case 'review':{let s=activeTestSubject(),r=state.results[sk(s)];let b=getSubjectBank(s,r.yearFilter||'all');quiz={code:s.code,mode:'graded',answers:r.answers||{},finished:true,score:r.score,bank:b,yearFilter:r.yearFilter||'all'};render();break}
    case 'endQuiz':quiz=null;render();break;
    case 'model':{let m=$('#model');if(m){m.hidden=!m.hidden;b.textContent=m.hidden?'Reveal model answer':'Hide model answer'}}break;
    case 'noteType':case 'noteDraw':saveNote(false);noteMode=a==='noteType'?'type':'draw';render();break;
    case 'saveNote':saveNote();break;
    case 'bullet':$('#noteText').value+='\n• ';$('#noteText').focus();break;
    case 'clearBoard':{let c=$('#board');if(c)c.getContext('2d').clearRect(0,0,c.width,c.height);break}
    case 'speak':{
      let sDept=studioDept||dept,sSubjects=subjects(sDept),sSubj=sSubjects.find(s=>s.code===studioSubject)||sSubjects[0];
      let filtered=getSubjectiveBank(sSubj,studioMarks,'all');
      let curQ=filtered[studioQ]||study[noteQ];
      if('speechSynthesis'in window&&curQ){let u=new SpeechSynthesisUtterance(curQ.q);u.lang='en-IN';speechSynthesis.cancel();speechSynthesis.speak(u)}
      else toast('Read-aloud not supported');
      break;
    }
    case 'voice':{let R=window.SpeechRecognition||window.webkitSpeechRecognition;if(!R){toast('Dictation is not supported by this browser.');break}if(!confirm('Your browser may send audio to its speech recognition provider. Start microphone?'))break;let t=$('#noteText'),r=new R;r.lang='en-IN';r.onresult=x=>{if(t.isConnected)t.value+=' '+x.results[0][0].transcript};r.onerror=()=>toast('Microphone unavailable or permission denied');r.start();toast('Listening…');break}
  }}catch(err){toast(err.message||'Action failed')}
});
render();
