const C_TOPICS = [
  'Algorithms, pseudocode & flowcharts',
  'Structured vs modular programming',
  'Compiler, interpreter, debugging & profiling',
  'Variables, data types, identifiers & keywords',
  'Operators, expressions & type casting',
  'Formatted input and output',
  'Decision making and switch-case',
  'Loops, break, continue & goto',
  'Functions and parameter passing',
  'Recursion',
  'Storage classes, inline functions & macros',
  '1D and 2D arrays',
  'Strings and string manipulation',
  'Pointers and pointer arithmetic',
  'Dynamic memory allocation, leaks & dangling pointers',
  'Structures, unions, enums & bit fields',
  'Stack and queue',
  'Linked lists',
  'File modes and file operations',
  'Command-line arguments and file errors'
];

const D = (code, name, topics, source = 'Verified from official syllabus & semester papers') => ({ code, name, topics, source });

const departments = {
  CE: {
    name: 'Civil Engineering',
    icon: '▰',
    color: '#79e2c2',
    subjects: [
      D('CE301', 'Surveying', ['Surveying principles', 'Chain and compass surveying', 'EDM', 'Plane table surveying', 'Levelling and contouring', 'Theodolite and tacheometry', 'Simple and transition curves', 'Total station'], 'R25 CE · pp. 55–57'),
      D('CE302', 'Building Materials and Construction', ['Bricks and aggregates', 'Lime, cement and concrete', 'Mortar and timber', 'Paints and varnishes', 'Foundations', 'Masonry, walls, doors and windows', 'Stairs, flooring, plastering and roofing'], 'R25 CE · pp. 58–59'),
      D('CE303', 'Strength of Materials', ['Stress, strain and Hooke’s law', 'Shear force and bending moment', 'Beam bending and deflection', 'Plane trusses', 'Principal stresses and Mohr’s circle', 'Thin shells', 'Torsion, springs and columns'], 'R25 CE · pp. 60–61'),
      D('CE304', 'Fluid Mechanics', ['Fluid properties', 'Fluid statics, kinematics and dynamics', 'Viscous and turbulent flow', 'Flow through pipes', 'Flow measurement', 'Boundary layers', 'Drag and lift', 'Dimensional analysis', 'Compressible flow'], 'R25 CE · pp. 62–63'),
      D('CS(CE)301', 'Advanced Computer Programming', C_TOPICS, 'R25 CE · pp. 64–65'),
      D('CE305', 'Composite Materials', ['Fibres and matrices', 'Characterization', 'Performance analysis', 'Fabrication and applications'], 'R25 CE · pp. 66–67'),
      D('PH(CE)301', 'Physics-II (Introduction to Mechanics)', ['Vector calculus and kinematics', 'Newtonian mechanics', 'Harmonic oscillations and damped vibration', 'Wave propagation and optics'], 'R21/R23 CE Curriculum'),
      D('M(CS)301', 'Numerical Methods', ['Approximation in numerical computation', 'Interpolation and Lagrange polynomials', 'Numerical differentiation and integration', 'Solution of linear & non-linear equations', 'Numerical solution of ODEs'], 'R21/R23 CE Curriculum')
    ],
    labs: [
      D('CE391', 'Surveying Lab', ['Chain survey', 'Compass survey', 'Levelling', 'Theodolite', 'Total station'], 'R25 CE · pp. 68–69'),
      D('CE392', 'Fluid Mechanics Lab', ['Orifice discharge', 'Venturi meter', 'Bernoulli theorem', 'Reynolds number', 'Pipe friction', 'Broad crested weir', 'Minor pipe losses', 'Oil density and viscosity'], 'R25 CE · pp. 70–71'),
      D('CS(CE)391', 'Programming Lab', ['IDE and compilation', 'Data types and operators', 'Conditionals', 'Loops', 'Functions and recursion', 'Arrays and strings', 'Pointers and allocation', 'File handling', 'Stack, queue and linked list'], 'R25 CE · pp. 72–74'),
      D('CE393', 'Building Planning and Drawing Lab', ['AutoCAD basics', 'Plan, elevation & section of buildings', 'Foundation detailing', 'Staircase drawing'], 'R25 CE · p. 75'),
      D('CE394', 'Industrial Training', ['Site visits', 'Construction methodology', 'Quality control report'], 'R25 CE · p. 76')
    ]
  },
  ME: {
    name: 'Mechanical Engineering',
    icon: '⚙',
    color: '#ffbd7a',
    subjects: [
      D('ME301', 'Engineering Thermodynamics', ['System, state, path & process', 'Zeroth law and temperature scale', 'First law: closed & open systems, steady flow energy equation', 'Second law: Kelvin-Planck & Clausius statements, Carnot cycle', 'Entropy, Clausius inequality & irreversibility', 'Vapour power cycles: Rankine cycle & reheating', 'Gas power cycles: Otto, Diesel & Dual cycles'], 'R23/R21 ME Curriculum'),
      D('ME302', 'Manufacturing Processes', ['Casting processes: sand casting, patterns, gating & risers', 'Special casting: die casting, centrifugal & investment casting', 'Forming: rolling, forging, extrusion & wire drawing', 'Welding: arc, gas, TIG, MIG & resistance welding', 'Sheet metal working: shearing, blanking, piercing & deep drawing', 'Powder metallurgy & unconventional machining basics'], 'R23/R21 ME Curriculum'),
      D('ME303', 'Strength of Materials', ['Concept of stress and strain, elastic constants & Hooke’s law', 'Shear force & bending moment diagrams for beams', 'Flexural & shear stresses in beams', 'Torsion of circular shafts, angle of twist & power transmission', 'Deflection of beams: Macaulay’s method & moment-area theorems', 'Columns and struts: Euler’s theory & Rankine formula', 'Thin cylinders & spherical shells subjected to internal pressure'], 'R23/R21 ME Curriculum'),
      D('ME304', 'Fluid Mechanics and Fluid Machines', ['Fluid properties, manometry & hydrostatic forces', 'Fluid kinematics: continuity equation, streamlines & velocity potential', 'Fluid dynamics: Euler’s equation, Bernoulli’s theorem & applications', 'Flow through pipes: Darcy-Weisbach equation, friction factor & losses', 'Hydraulic turbines: Pelton wheel, Francis & Kaplan turbines', 'Centrifugal and reciprocating pumps: working & performance characteristics'], 'R23/R21 ME Curriculum'),
      D('ME305', 'Machine Drawing', ['Orthographic projections and sectional views', 'Fasteners: threads, bolts, nuts & locking devices', 'Keys, cotters, knuckle joints & shaft couplings', 'Assembly drawing of stuffing box, screw jack & tailstock', 'Limits, fits, tolerances & surface roughness symbols'], 'R21 ME Curriculum'),
      D('EE(ME)301', 'Engineering Mechanics', ['Equilibrium of rigid bodies & free body diagrams', 'Friction: laws, wedge friction & belt friction', 'Centroid and moment of inertia of planar & composite areas', 'Kinematics of particles: rectilinear & curvilinear motion', 'Kinetics: D’Alembert’s principle, work-energy & impulse-momentum'], 'R21/R23 ME Curriculum'),
      D('M(ME)301', 'Mathematics-III (PDE, Probability & Statistics)', ['Partial differential equations: formation, Lagrange method & separation of variables', 'Fourier series and transforms', 'Probability distributions: Binomial, Poisson & Normal distributions', 'Sampling theory, confidence intervals & hypothesis testing (t-test, chi-square)'], 'R23 ME Curriculum'),
      D('CS(ME)301', 'Python Programming', ['Python syntax, data types, operators & expressions', 'Conditionals, loops & comprehensions', 'Functions, lambda expressions & recursion', 'Object oriented programming: classes, inheritance & polymorphism', 'NumPy arrays, Pandas DataFrames & Matplotlib plotting', 'File handling, exception handling & modular programming'], 'R23 ME Curriculum')
    ],
    labs: [
      D('ME391', 'Thermodynamics & Heat Engines Lab', ['Determination of calorific value of fuels', 'Flash point and fire point apparatus', 'Performance test on 4-stroke petrol engine', 'Performance test on single cylinder diesel engine', 'Heat balance sheet of IC engine'], 'R23 ME Curriculum'),
      D('ME392', 'Manufacturing Processes Lab', ['Pattern making in carpentry shop', 'Moulding and casting practice in foundry shop', 'Arc and gas welding joint preparation', 'Sheet metal development and fabrication'], 'R23 ME Curriculum'),
      D('ME393', 'Machine Drawing & CAD Lab', ['2D drafting of machine elements using CAD software', 'Assembly drawing of joints and couplings', 'Sectional views and tolerance annotation'], 'R23 ME Curriculum'),
      D('EE(ME)391', 'Electrical Engineering Lab', ['Characteristics of DC shunt motor', 'OC and SC test of single phase transformer', 'Measurement of power in 3-phase circuits'], 'R21/R23 ME Curriculum'),
      D('CS(ME)391', 'Python Programming Lab', ['Basic scripting, loops & functions', 'Data structures manipulation: lists, dicts, tuples', 'Numerical computing with NumPy', 'Data analysis & visualization projects'], 'R23 ME Curriculum')
    ]
  },
  CSE: {
    name: 'Computer Science Engineering',
    icon: '⌘',
    color: '#9caeff',
    subjects: [
      D('CS301', 'Data Structures', ['Arrays: representation, addressing & sparse matrices', 'Linked Lists: singly, doubly, circular & skip lists', 'Stacks: array & linked implementations, infix to postfix, expression evaluation', 'Queues: circular, double-ended (deque) & priority queues', 'Trees: binary tree traversals, BST insertion/deletion, AVL tree rotations, B/B+ trees', 'Graphs: adjacency matrix & list, BFS, DFS, Dijkstra, Prim & Kruskal algorithms', 'Sorting & Searching: quicksort, mergesort, heapsort, radix sort, binary search', 'Hashing: hash functions, collision resolution (chaining, open addressing)'], 'R23/R21 CSE Curriculum'),
      D('CS302', 'Computer Organization & Architecture', ['Basic computer architecture, register transfer language & bus structure', 'Arithmetic unit: Booth’s algorithm for multiplication, restoring & non-restoring division', 'Control unit design: hardwired vs microprogrammed control', 'Memory organization: hierarchy, cache mapping (direct, associative, set-associative)', 'Virtual memory: paging, segmentation & page replacement policies', 'Input/Output organization: programmed I/O, interrupt-driven I/O, DMA transfer', 'Pipelining: instruction pipeline, arithmetic pipeline, hazards (data, structural, control)'], 'R23/R21 CSE Curriculum'),
      D('M(CSE)301', 'Mathematics-III (Differential Calculus & Statistics)', ['Random variables, probability mass & density functions', 'Mathematical expectation, variance, moments & moment generating functions', 'Theoretical distributions: Binomial, Poisson, Uniform, Exponential & Normal', 'Correlation, regression analysis & method of least squares', 'Testing of hypothesis: large sample tests (z-test), small sample tests (t-test, F-test, chi-square)'], 'R21/R18 CSE Curriculum'),
      D('M(CSE)302', 'Discrete Mathematics', ['Set theory: sets, relations, equivalence relations & partial order sets (posets), Hasse diagrams', 'Propositional and predicate logic: truth tables, tautologies, inference rules', 'Combinatorics: pigeonhole principle, permutations, combinations, recurrence relations', 'Graph theory: paths, cycles, Euler & Hamiltonian graphs, trees, spanning trees, planar graphs', 'Algebraic structures: semigroups, monoids, groups, subgroups, rings & fields'], 'R21 CSE Curriculum'),
      D('PH301', 'Physics-II (Semiconductor & Quantum Physics)', ['Quantum mechanics: wave-particle duality, de Broglie wavelength, uncertainty principle, Schrödinger equation', 'Band theory of solids: conductors, insulators & semiconductors, energy gap', 'Semiconductors: intrinsic & extrinsic, carrier concentration, Fermi level, Hall effect', 'Optoelectronics: lasers (spontaneous & stimulated emission), semiconductor laser, optical fibres'], 'R18/R21 CSE Curriculum'),
      D('CS(EC)301', 'Data Structures & Algorithms', ['Linear data structures: arrays, stacks, queues & linked lists', 'Non-linear data structures: trees, binary search trees & heaps', 'Graph representations and traversal algorithms (BFS, DFS)', 'Algorithm analysis: asymptotic notations (Big-O, Omega, Theta)', 'Sorting and searching techniques and their complexities'], 'R23 CSE/ECE Curriculum'),
      D('CS(EE)301', 'Data Structures & Algorithms', ['Abstract Data Types (ADTs) and algorithm complexity analysis', 'Stack applications: evaluation of expressions & recursion', 'Queue and priority queue in scheduling applications', 'Tree data structures: BST, traversals & applications in searching', 'Graph algorithms: shortest paths & minimum spanning trees'], 'R23 CSE/EE Curriculum')
    ],
    labs: [
      D('CS391', 'Data Structures Lab', ['Implementation of array operations & polynomial arithmetic', 'Stack operations: push, pop, infix-to-postfix conversion', 'Queue operations: linear, circular & priority queue', 'Linked list operations: insert, delete, reverse, merge', 'Binary search tree: insertion, deletion & traversals', 'Sorting algorithms implementation: Quick sort, Merge sort, Heap sort', 'Graph traversals: BFS and DFS implementation'], 'R23 CSE Curriculum'),
      D('CS392', 'Computer Organization Lab', ['Design of combinational circuits using Logisim/HDL', 'ALU design: ripple carry adder, lookahead carry, subtractor', 'Design of multiplier using Booth’s algorithm', 'Design of memory unit & cache controller simulation', 'Instruction cycle and control unit simulation in Logisim'], 'R23 CSE Curriculum'),
      D('PH391', 'Physics-II Lab', ['Determination of Planck’s constant using photo-electric effect', 'Hall effect measurement in semiconductors', 'Energy band gap determination of a semiconductor diode', 'Numerical aperture measurement of optical fibre', 'Laser diffraction experiment for wavelength determination'], 'R21/R23 CSE Curriculum')
    ]
  },
  IT: {
    name: 'Information Technology',
    icon: '◉',
    color: '#e6a0ff',
    subjects: [
      D('IT301', 'Computer Organization and Architecture', ['Basic operational concepts, bus structures & performance metrics', 'Data representation, fixed & floating point arithmetic, Booth’s multiplication algorithm', 'Processor organization: register set, ALU, instruction cycle & instruction formats', 'Control unit: hardwired control vs microprogrammed control', 'Memory system: semiconductor RAM, ROM, cache memory mapping & replacement policies', 'Virtual memory management: paging, segmentation & translation lookaside buffer (TLB)', 'Input/Output subsystem: bus arbitration, interrupts, priority interrupt controller & DMA', 'Pipelining & superscalar operation: pipeline stages, hazards & mitigation'], 'R23 IT · Official Curriculum'),
      D('IT302', 'Analog and Digital Electronics', ['Operational amplifiers: inverting, non-inverting, summing, integrator & differentiator', 'Number systems & Boolean algebra: canonical SOP/POS, Karnaugh maps & Quine-McCluskey minimization', 'Combinational circuits: adders, subtractors, decoders, encoders, multiplexers & demultiplexers', 'Sequential circuits: SR, JK, D, T flip-flops, master-slave flip-flops & triggering', 'Registers and Counters: shift registers, asynchronous & synchronous counters, ring & Johnson counters', 'D/A and A/D converters: R-2R ladder, successive approximation ADC'], 'R23 IT · Official Curriculum'),
      D('IT303', 'Data Structure and Algorithm', ['Abstract Data Types, arrays & sparse matrix representation', 'Stacks & Queues: expression evaluation, circular queue, deque & priority queue implementations', 'Linked Lists: singly, doubly & circular linked lists with pointer manipulation', 'Trees: binary tree properties, tree traversals, binary search trees (BST), AVL trees & heap structures', 'Graphs: representations, BFS, DFS, topological sorting, Dijkstra’s shortest path & MST', 'Searching and Sorting: binary search, interpolation search, quicksort, mergesort & heapsort', 'Hashing techniques: collision resolution strategies & hash functions'], 'R23 IT · Official Curriculum'),
      D('IT304', 'Data Structure and Algorithm', ['Linear data structures: arrays, stacks, queues & linked lists', 'Non-linear data structures: trees, binary search trees & graphs', 'Algorithm design techniques: divide and conquer, greedy methods & dynamic programming', 'Sorting, searching & hashing complexity analysis'], 'R21 IT · Official Curriculum'),
      D('IT305', 'Formal Language and Automata Theory', ['Introduction to finite state automata: deterministic (DFA) & non-deterministic (NFA) finite automata', 'Equivalence of DFA and NFA, minimization of finite automata', 'Regular languages, regular expressions, Arden’s theorem & pumping lemma for regular languages', 'Context-free grammars (CFG): derivation trees, ambiguity, Chomsky & Greibach normal forms (CNF, GNF)', 'Pushdown automata (PDA): acceptance by empty stack & final state, equivalence of CFG and PDA', 'Pumping lemma for context-free languages, closure properties of CFLs', 'Turing machines: design of Turing machines, Church-Turing thesis, halting problem & decidability'], 'R21/R23 IT · Official Curriculum'),
      D('PH(IT)301', 'Engineering Physics - II (Semiconductor Physics)', ['Quantum mechanics fundamentals: wave packet, phase and group velocity, Schrödinger wave equation', 'Band theory of solids: Kronig-Penney model, origin of energy bands, effective mass of electron', 'Semiconductors: density of states, Fermi-Dirac distribution, carrier concentration in intrinsic & extrinsic semiconductors', 'Transport phenomena: drift and diffusion currents, Einstein relation, Hall effect & measurement', 'Optoelectronic devices: p-n junction photodiode, solar cell, LED & laser diodes', 'Dielectric & magnetic properties of materials: polarization mechanisms, dia-, para- & ferromagnetism'], 'R23 IT · Official Curriculum'),
      D('M(IT)301', 'Numerical Methods and Statistics', ['Errors in numerical computation: truncation, round-off & propagation of errors', 'Interpolation: Newton’s forward/backward interpolation, Lagrange & divided difference formulas', 'Numerical differentiation and integration: Trapezoidal rule, Simpson’s 1/3 and 3/8 rules', 'Numerical solution of algebraic and transcendental equations: Bisection, Regula-Falsi & Newton-Raphson methods', 'Solution of systems of linear equations: Gauss elimination, Gauss-Jordan & Gauss-Seidel iterations', 'Numerical solution of ODEs: Euler’s method, modified Euler & Runge-Kutta 4th order method', 'Probability and statistics: random variables, expectation, standard distributions & curve fitting'], 'R23 IT · Official Curriculum'),
      D('M(IT)302', 'Numerical Methods and Statistics', ['Numerical computation and error estimation', 'Polynomial interpolation & difference tables', 'Numerical quadrature and applications in engineering', 'Iterative methods for linear and non-linear systems', 'Statistical data analysis, correlation & regression'], 'R21/R18 IT · Official Curriculum')
    ],
    labs: [
      D('IT391', 'Data Structure Lab', ['Array manipulation and sparse matrix representation', 'Stack operations: infix-to-postfix and evaluation', 'Circular queue and priority queue implementation', 'Singly and doubly linked lists operations', 'Binary search tree construction and traversals', 'Implementation of Quick sort, Merge sort and Heap sort', 'Breadth-First and Depth-First graph traversals'], 'R23 IT · Official Curriculum'),
      D('IT392', 'Analog and Digital Electronics Lab', ['Characteristics of inverting and non-inverting operational amplifiers', 'Verification of logic gates and Boolean algebra theorems', 'Design and implementation of half adder and full adder circuits', 'Multiplexer and Demultiplexer implementation using ICs', 'Study and verification of SR, JK, D and T flip-flops', 'Design of asynchronous and synchronous modulo-N counters'], 'R23 IT · Official Curriculum'),
      D('IT393', 'Computer Organization and Architecture Lab', ['Simulation of basic digital functional blocks in Logisim', 'Design and testing of 4-bit ALU', 'Design of fast adder using Carry Lookahead Adder (CLA)', 'Implementation of multiplication using Booth’s algorithm', 'Simulation of direct-mapped and set-associative cache memory', 'Assembly language programming exercises'], 'R23 IT · Official Curriculum'),
      D('PH(IT)391', 'Physics-II Lab', ['Measurement of energy band gap using four-probe method', 'Determination of Hall coefficient and carrier type', 'Characteristics of photovoltaic cell / solar cell', 'Study of laser beam divergence and diffraction grating', 'Determination of dielectric constant of materials'], 'R23 IT · Official Curriculum'),
      D('M(IT)391', 'Numerical Methods Lab', ['Implementation of Newton-Raphson and Regula-Falsi methods in C/Python', 'Implementation of Newton’s forward and Lagrange interpolation', 'Numerical integration using Trapezoidal and Simpson’s 1/3 rules', 'Solution of linear equations using Gauss-Seidel method', 'Solution of ODEs using Runge-Kutta 4th order method'], 'R23 IT · Official Curriculum')
    ]
  }
};

const years = [2025, 2024, 2023, 2022, 2021];
const driveFolders = {};

const Q = (q, options, correct, why) => ({ q, options, correct, why });

const bank = [
  // C Programming & Algorithms
  Q('Which loop executes its body at least once?', ['for', 'while', 'do-while', 'None'], 2, 'do-while checks the condition after executing the body.'),
  Q('What is the first index of a C array?', ['1', '0', '-1', 'Depends on size'], 1, 'C arrays are zero-indexed.'),
  Q('Which function releases dynamically allocated memory?', ['malloc()', 'free()', 'calloc()', 'fclose()'], 1, 'free() releases a dynamically allocated block.'),
  Q('Which operator obtains a variable address?', ['*', '%', '&', '!'], 2, 'The unary & operator obtains an address.'),
  Q('Which data structure uses FIFO?', ['Stack', 'Queue', 'Tree', 'None'], 1, 'A queue removes items in arrival order.'),
  Q('Which file mode appends text?', ['r', 'w', 'a', 'r+'], 2, 'Append mode adds output to the end of the file.'),
  Q('Which keyword defines a structure?', ['struct', 'class', 'record', 'union'], 0, 'struct defines a structure type.'),
  Q('Which statement skips the rest of the current loop iteration?', ['break', 'goto', 'return', 'continue'], 3, 'continue proceeds to the next iteration.'),
  Q('What prevents unbounded recursion?', ['A base case', 'An array', 'A macro', 'A pointer'], 0, 'A base case stops recursive calls.'),
  Q('Which character terminates a C string?', ['\\n', '\\0', 'EOF', 'Space'], 1, 'C strings end with the null character.'),
  
  // Data Structures & Algorithms (CS301 / IT303)
  Q('What is the worst-case time complexity of QuickSort?', ['O(n log n)', 'O(n)', 'O(n²)', 'O(log n)'], 2, 'QuickSort degrades to O(n²) when the chosen pivot is always the smallest or largest element.'),
  Q('Which data structure is naturally used for Depth-First Search (DFS) on a graph?', ['Queue', 'Stack', 'Heap', 'Hash Table'], 1, 'DFS uses a Stack (or the system call stack via recursion).'),
  Q('What is the balance factor of an AVL tree node?', ['Left height - Right height', 'Left height + Right height', 'Left nodes - Right nodes', 'Depth - Height'], 0, 'In an AVL tree, the balance factor is defined as height(left subtree) - height(right subtree), which must be -1, 0, or 1.'),
  
  // Computer Organization & Architecture (CS302 / IT301)
  Q('Booth’s algorithm is used for which arithmetic operation?', ['Floating point division', 'Signed binary multiplication', 'BCD addition', 'Exponentiation'], 1, 'Booth’s algorithm efficiently multiplies signed 2’s complement binary numbers.'),
  Q('Which mapping technique in cache memory allows a block of main memory to be loaded into any cache line?', ['Direct mapping', 'Fully associative mapping', 'Set-associative mapping', 'Segmented mapping'], 1, 'Fully associative mapping allows a memory block to be placed in any available line of cache.'),
  
  // Thermodynamics & Engineering Mechanics (ME301 / EE(ME)301)
  Q('Which thermodynamic law establishes the concept of temperature and thermometer calibration?', ['First Law', 'Zeroth Law', 'Second Law', 'Third Law'], 1, 'The Zeroth Law states that if two systems are in thermal equilibrium with a third, they are in thermal equilibrium with each other.'),
  Q('What does the area under a p-V diagram represent for a reversible quasi-static process?', ['Entropy change', 'Work transfer', 'Heat capacity', 'Internal energy'], 1, 'Work done is given by ∫ p dV, which equals the area under the process curve on a p-V diagram.'),
  
  // Civil Engineering (CE301 / CE302)
  Q('In surveying, what is the process of orienting the plane table so that its lines are parallel to the ground lines?', ['Centering', 'Levelling', 'Orientation', 'Radiation'], 2, 'Orientation keeps the table parallel to positions previously occupied.'),
  Q('Which ingredient in Portland cement is primarily responsible for the early strength development within the first 7 days?', ['Dicalcium silicate (C₂S)', 'Tricalcium silicate (C₃S)', 'Tricalcium aluminate (C₃A)', 'Tetracalcium aluminoferrite (C₄AF)'], 1, 'Tricalcium silicate (C₃S) hydrates rapidly and provides high early strength to concrete.'),
  
  // Semiconductor Physics (PH301 / PH(IT)301)
  Q('In an intrinsic semiconductor, where does the Fermi level lie at absolute zero temperature (0 K)?', ['At the bottom of the conduction band', 'At the top of the valence band', 'Exactly in the middle of the forbidden energy gap', 'Inside the conduction band'], 2, 'In intrinsic semiconductors, equal electron and hole densities position the Fermi energy at the exact center of the forbidden energy gap.')
];

const study = [
  {
    topic: 'Loops',
    q: 'Explain for, while and do-while loops with examples. (15-mark practice)',
    answer: 'Definition: A loop repeats a block of statements while a condition permits.\n• for: initialization, condition, update.\n• while: checks condition before execution.\n• do-while: checks condition after execution.\nUses: repeated calculations and data processing.\nAdvantage: avoids repeated code. Limitation: incorrect conditions can cause infinite loops.\nCivil example: calculating the area of several floors.',
    code: 'for (int i = 1; i <= 5; i++) {\n    printf("%d\\n", i);\n}',
    diagram: 'Start → Initialize → Condition → Body → Update → Condition; false → End'
  },
  {
    topic: 'Recursion',
    q: 'Define recursion and explain factorial. (10-mark practice)',
    answer: 'Recursion is when a function calls itself. A base case stops the calls. Each recursive call reduces the problem. It can simplify hierarchical calculations, but consumes call-stack space. Example: traversing a hierarchy of project tasks.',
    code: 'int fact(int n) {\n    if (n <= 1) return 1;\n    return n * fact(n - 1);\n}',
    diagram: 'fact(3) → 3 × fact(2) → 3 × 2 × fact(1) → 6'
  },
  {
    topic: 'Pointers',
    q: 'What is a pointer? (2-mark practice)',
    answer: 'A pointer is a variable that stores the address of another object. It is useful for accessing arrays and passing addresses to functions.',
    code: 'int x = 25;\nint *p = &x;',
    diagram: 'p [address] → x [25]'
  },
  {
    topic: 'Structures',
    q: 'Differentiate structure and union. (5-mark practice)',
    answer: 'A structure provides separate storage for its members. A union shares storage among its members. Structures suit records such as material quantity and unit cost; unions suit alternative representations.'
  },
  {
    topic: 'Files',
    q: 'Which function opens a file? (1-mark practice)',
    answer: 'fopen()'
  },
  {
    topic: 'Data Structures: AVL Trees',
    q: 'Explain AVL tree balance factors and the four rotation cases. (10-mark practice)',
    answer: 'An AVL tree is a self-balancing binary search tree where the difference between heights of left and right subtrees (Balance Factor) cannot exceed ±1.\nBalance Factor = Height(Left) - Height(Right) ∈ {-1, 0, 1}.\nWhen an insertion or deletion unbalances a node, four rotation operations restore balance:\n1. LL Rotation: Right rotation about the unbalanced node.\n2. RR Rotation: Left rotation about the unbalanced node.\n3. LR Rotation: Left rotation on the left child followed by Right rotation on the node.\n4. RL Rotation: Right rotation on the right child followed by Left rotation on the node.',
    code: '// Right rotation snippet\nNode* rightRotate(Node *y) {\n    Node *x = y->left;\n    Node *T2 = x->right;\n    x->right = y;\n    y->left = T2;\n    y->height = max(height(y->left), height(y->right)) + 1;\n    x->height = max(height(x->left), height(x->right)) + 1;\n    return x;\n}',
    diagram: 'Unbalanced (LL): [z] -> [y] -> [x] === RightRotate(z) ===> Balanced: [y] with children [x] and [z]'
  },
  {
    topic: 'COA: Cache Memory Mapping',
    q: 'Compare Direct, Associative, and Set-Associative Cache Mapping techniques. (10-mark practice)',
    answer: '1. Direct Mapping: Each block of main memory maps to exactly one cache line: line = (Block Address) mod (Number of Cache Lines). Fast and simple hardware, but high conflict misses.\n2. Fully Associative: A memory block can reside in any cache line. Eliminates conflict misses, but requires associative search across all tags simultaneously (costly hardware).\n3. Set-Associative Mapping: Compromise between direct and associative. Cache is divided into sets, each with k lines (k-way). Set = (Block Address) mod (Number of Sets). Inside the set, associative search is performed.',
    diagram: 'Main Memory Address: [ Tag | Set Index | Word Offset ] → Decoder selects Set → Tag Comparator checks k lines in set'
  },
  {
    topic: 'Thermodynamics: First & Second Laws',
    q: 'State the Clausius and Kelvin-Planck statements of the Second Law of Thermodynamics and prove their equivalence. (15-mark practice)',
    answer: '1. Kelvin-Planck Statement: It is impossible for any device operating on a cycle to receive heat from a single thermal reservoir and produce a net amount of work.\n2. Clausius Statement: It is impossible to construct a device operating on a cycle whose sole effect is the transfer of heat from a cooler body to a hotter body without external work input.\nEquivalence: Any violation of the Kelvin-Planck statement leads directly to a violation of the Clausius statement, and vice versa. By coupling a hypothetical super-efficient heat engine with a heat pump, one can construct an equivalent perpetual motion machine of the second kind (PMM-2).',
    diagram: 'Source (T₁) → [Engine with W_net = Q₁] → [Powers Heat Pump transferring Q₂ from Sink T₂ to Source T₁] ⇒ Net transfer of heat without external work (Clausius violation)!'
  }
];

const officialSyllabi = {
  CE: 'https://www.nit.ac.in/pdf/B.Tech_CE_25.pdf',
  ME: 'https://www.nit.ac.in/pdf/B.Tech_ME_23.pdf',
  CSE: 'https://www.nit.ac.in/pdf/B.Tech_CSE_25.pdf',
  IT: 'https://www.nit.ac.in/pdf/B.Tech_IT_25.pdf'
};
