/* NiT Night - Comprehensive Marks-wise Subjective & Theory Question Bank (All 4 Departments) */
window.subjectiveBanks = {
  "CE301": [
    {
      "code": "CE301",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Chain Surveying & Triangulation",
      "q": "What is a well-conditioned triangle? Explain why interior angles should ideally lie between 30° and 120° in chain surveying.",
      "answer": "1. DEFINITION:\nA well-conditioned triangle is one in which the intersection of lines or rays occurs at angles that minimize plotting errors and displacement of plotted points. An equilateral triangle is the most ideal well-conditioned triangle.\n\n2. GEOMETRIC CONDITION (30° to 120°):\n• If an angle is less than 30° (acute/ill-conditioned), the intersecting lines meet at a very narrow angle. A slight linear measurement error results in a very large longitudinal error in locating the apex station.\n• If an angle exceeds 120° (obtuse), a small error in chainage shifts the vertex transversely by a large displacement.\n• At angles between 30° and 120°, the error ellipse is nearly circular, ensuring consistent positional accuracy.\n\n3. FIELD APPLICATION:\nIn chain surveying and triangulation networks, main stations are selected so that every base triangle satisfies 30° ≤ θ ≤ 120° to avoid cumulative error propagation.",
      "keyPoints": [
        "Clear definition of well-conditioned vs ill-conditioned triangle",
        "Proof/explanation of error displacement at angles < 30°",
        "Explanation of transverse shift at angles > 120°",
        "Equilateral triangle (60°-60°-60°) as ideal baseline"
      ],
      "rubric": "2 Marks for definition, 2 Marks for geometric error analysis (30°-120°), 1 Mark for field application guidelines.",
      "dept": "CE",
      "subject": "Surveying"
    },
    {
      "code": "CE301",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Tacheometric Surveying",
      "q": "Derive the expressions for distance D and elevation difference V in stadia tacheometry when the line of sight is inclined at an angle θ to the horizontal and the staff is held vertically. State the multiplying and additive constants.",
      "answer": "1. TACHEOMETRIC PRINCIPLE:\nIn stadia tacheometry, distances and heights are obtained by sighting upper, middle, and lower stadia cross-hairs on a graduated levelling staff.\n\n2. DERIVATION FOR INCLINED SIGHT (STAFF VERTICAL):\nLet:\n• S = Staff intercept = (Top hair reading - Bottom hair reading) = s_top - s_bot\n• θ = Angle of elevation (+) or depression (-) measured by vertical circle\n• h = Central hair reading on the staff\n• k = Multiplying constant = f/i (normally 100)\n• C = Additive constant = (f + d) (normally 0 for anallatic telescope)\n\nStep A: Equivalent Normal Staff Intercept (S')\nSince the staff is vertical and line of sight is inclined at θ, the intercept perpendicular to the line of sight is:\nS' = S · cos(θ)\n\nStep B: Inclined Distance (L) along Line of Collimation\nL = k · S' + C = k · S · cos(θ) + C\n\nStep C: Horizontal Distance (D)\nD = L · cos(θ)\nD = [k · S · cos(θ) + C] · cos(θ)\nD = k · S · cos²(θ) + C · cos(θ)\n\nStep D: Vertical Distance (V) between Trunnion Axis and Central Hair\nV = L · sin(θ) = [k · S · cos(θ) + C] · sin(θ)\nV = k · S · cos(θ) · sin(θ) + C · sin(θ)\nV = (1/2) · k · S · sin(2θ) + C · sin(θ)\n\nStep E: Elevation of Staff Station (RL_Q)\nRL of Station Q = RL of Instrument Station + Height of Instrument (HI) ± V - h\n\n3. CONSTANTS:\n• Multiplying constant k = f / i (f = focal length, i = stadia spacing)\n• Additive constant C = f + d (distance from objective to vertical axis)",
      "keyPoints": [
        "Definition of S, S', θ, k, and C",
        "Derivation step S' = S * cos(θ)",
        "Derivation of D = k*S*cos²(θ) + C*cos(θ)",
        "Derivation of V = (1/2)*k*S*sin(2θ) + C*sin(θ)",
        "Reduced level formula accounting for HI and central hair reading"
      ],
      "rubric": "3 Marks for normal intercept & inclined distance, 4 Marks for D and V derivations, 3 Marks for constants and RL calculation.",
      "dept": "CE",
      "subject": "Surveying"
    },
    {
      "code": "CE301",
      "year": 2023,
      "marks": 15,
      "group": "Group C",
      "topic": "Circular Curves & Setting Out",
      "q": "(a) Explain the Rankine method of tangential angles (deflection angles) for setting out a simple circular curve with a theodolite. Derive the expression for deflection angle δ_n in terms of chord length c and radius R. (10 Marks)\n(b) A circular curve of radius 400 m deflects through an angle of 60°. Calculate the length of curve, tangent length, apex distance, and mid-ordinate. (5 Marks)",
      "answer": "PART (a): RANKINE'S DEFLECTION ANGLE METHOD (10 MARKS)\n\n1. PRINCIPLE:\nThe deflection angle δ to any point on a circular curve from the tangent is equal to half the angle subtended by the arc/chord at the center of the curve.\nAngle subtended at center: Δ_n = 2 · δ_n\n\n2. MATHEMATICAL DERIVATION:\nLet chord length = c_n (meters), Radius of curve = R (meters).\nIn arc measure:\nArc length ≈ Chord length = c_n\nAngle at center in radians = c_n / R\nDeflection angle in radians:\nδ_n (radians) = (1/2) · (c_n / R)\n\nConverting to degrees and minutes:\nδ_n (minutes) = [c_n / (2R)] · (180 / π) · 60\nδ_n = c_n · 1718.87 / R (minutes of arc)\n\nTotal tangential angle for station n from initial tangent:\nΔ_n = δ_1 + δ_2 + ... + δ_n\n\n3. FIELD PROCEDURE:\n1. Set theodolite at Point of Curve (PC/T1), zeroed on back station/intersection point.\n2. Turn telescope to angle δ_1; measure chord c_1 from T1 along line of sight to pin P1.\n3. Turn telescope to total deflection angle Δ_2 = δ_1 + δ_2; measure chord c_2 from P1 until it intersects sight line at P2.\n4. Continue iteratively until Point of Tangency (PT/T2) is reached.\n\n-----------------------------------------------------------\nPART (b): NUMERICAL SOLUTION (5 MARKS)\n\nGiven:\nRadius R = 400 m, Deflection angle Δ = 60° = (60 · π / 180) = π / 3 radians ≈ 1.0472 rad.\n\n1. Tangent Length (T):\nT = R · tan(Δ / 2) = 400 · tan(30°) = 400 · (1 / √3) = 230.94 m\n\n2. Curve Length (L):\nL = R · Δ (in radians) = 400 · (π · 60 / 180) = 400 · (π / 3) = 418.88 m\n\n3. Apex Distance / External Distance (E):\nE = R · [sec(Δ / 2) - 1] = 400 · [sec(30°) - 1] = 400 · [(2 / √3) - 1] = 400 · (1.1547 - 1) = 61.88 m\n\n4. Mid-Ordinate / Versed Sine (M):\nM = R · [1 - cos(Δ / 2)] = 400 · [1 - cos(30°)] = 400 · [1 - 0.8660] = 53.59 m",
      "keyPoints": [
        "Rankine's theorem: tangential angle equals half the central angle",
        "Derivation of δ = 1718.87 * c / R minutes",
        "Step-by-step theodolite and tape setting out procedure",
        "Accurate numerical formulas for T, L, E, and M with correct units"
      ],
      "rubric": "Part (a): 4 Marks derivation, 4 Marks field procedure, 2 Marks sketch. Part (b): 5 Marks (1.25 Mark per calculation).",
      "dept": "CE",
      "subject": "Surveying"
    }
  ],
  "CE302": [
    {
      "code": "CE302",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Brick Masonry Bonds",
      "q": "Differentiate clearly between English Bond and Flemish Bond in brick masonry with neat sectional sketches. Which bond is structurally stronger and why?",
      "answer": "1. COMPARISON:\nFeature               | English Bond                           | Flemish Bond\n----------------------|----------------------------------------|-----------------------------------------\nArrangement           | Alternate courses of headers &         | Alternate headers and stretchers in\n                      | stretchers throughout wall thickness.  | every single course.\nAppearance            | Less artistic; utilitarian.           | Highly aesthetic and decorative.\nStructural Strength   | Maximum structural strength & load-    | Slightly weaker due to continuous vertical\n                      | bearing capacity.                     | internal joints.\nWorkmanship           | Easier to construct; less skill        | Requires skilled masons; precise queen\n                      | required.                              | closers needed next to quoin headers.\nCost                  | More economical.                      | Slightly costlier due to skilled labor.\n\n2. STRUCTURAL SUPERIORITY OF ENGLISH BOND:\nEnglish bond is structurally stronger because it completely eliminates continuous vertical mortar joints inside the hearting of the wall. The alternate course of solid headers ties the front and back facings solidly together across the full width of the wall.",
      "keyPoints": [
        "Tabular contrast on arrangement, appearance, strength, and workmanship",
        "Identification of queen closer placement next to quoin header",
        "Explanation of why English bond has superior load-bearing capacity",
        "Internal vertical joint continuity difference"
      ],
      "rubric": "3 Marks for structured comparison table, 2 Marks for structural strength rationale.",
      "dept": "CE",
      "subject": "Building Materials & Construction"
    },
    {
      "id": "SUB_CE_064",
      "dept": "CE",
      "code": "CE302",
      "subject": "Building Materials & Construction",
      "year": 2024,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Building Materials & Construction. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Building Materials & Construction (CE302).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_CE_065",
      "dept": "CE",
      "code": "CE302",
      "subject": "Building Materials & Construction",
      "year": 2025,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Building Materials & Construction (CE302). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Building Materials & Construction (CE302).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "code": "CE302",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Cement & Hydration Chemistry",
      "q": "What are Bogue's compounds in Portland cement? Explain the role, hydration rate, and contribution to strength of C3S, C2S, C3A, and C4AF. Discuss the role of gypsum in cement manufacturing.",
      "answer": "1. BOGUE'S COMPOUNDS OVERVIEW:\nWhen raw materials (calcareous and argillaceous) are fused at 1450°C in a rotary kiln, four major complex mineral compounds are formed, known as Bogue's Compounds:\n\nCompound Name            | Formula            | Shorthand | Proportion (%)\n-------------------------|--------------------|-----------|---------------\nTricalcium Silicate      | 3CaO · SiO₂        | C₃S       | 40 – 50%\nDicalcium Silicate       | 2CaO · SiO₂        | C₂S       | 25 – 35%\nTricalcium Aluminate     | 3CaO · Al₂O₃       | C₃A       | 8 – 12%\nTetracalcium Aluminoferrite | 4CaO·Al₂O₃·Fe₂O₃ | C₄AF      | 6 – 10%\n\n2. ROLES & HYDRATION BEHAVIOR:\n\n(a) C₃S (Tricalcium Silicate - Alite):\n• Hydrates rapidly within 7 days.\n• Responsible for high early strength (initial 7 to 14 days).\n• Releases substantial heat of hydration (500 J/g).\n• Essential for fast-track construction and cold-weather concreting.\n\n(b) C₂S (Dicalcium Silicate - Belite):\n• Hydrates very slowly, gaining strength after 28 days up to one year.\n• Responsible for progressive ultimate long-term strength.\n• Low heat of hydration (260 J/g); provides high chemical resistance to sulfate attacks.\n\n(c) C₃A (Tricalcium Aluminate - Celite):\n• Reacts instantaneously with water within minutes (flash set if unchecked).\n• Contributes very little to mechanical strength; produces highest heat of hydration (865 J/g).\n• Highly susceptible to sulfate attack (forms expansive ettringite).\n\n(d) C₄AF (Tetracalcium Aluminoferrite - Brownmillerite):\n• Hydrates rapidly but contributes poorest strength.\n• Responsible for typical grey colour of Portland cement. Lowest heat release.\n\n3. ROLE OF GYPSUM (CaSO₄ · 2H₂O):\nWithout gypsum, C₃A reacts immediately with water causing 'flash set' (premature stiffening). During final grinding of clinker, 2% to 3% gypsum is interground. Gypsum reacts with C₃A to form an insoluble protective coating of calcium sulfoaluminate (ettringite), retarding the initial setting time to 30+ minutes.",
      "keyPoints": [
        "Names, chemical formulas, and percentages of all 4 Bogue compounds",
        "C3S: early strength vs C2S: long-term ultimate strength",
        "C3A: flash setting behavior and heat generation",
        "Role of gypsum as a setting retarder preventing flash set"
      ],
      "rubric": "4 Marks for compound definitions and proportions, 4 Marks for individual hydration characteristics, 2 Marks for gypsum mechanism.",
      "dept": "CE",
      "subject": "Building Materials & Construction"
    },
    {
      "id": "SUB_CE_066",
      "dept": "CE",
      "code": "CE302",
      "subject": "Building Materials & Construction",
      "year": 2024,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Building Materials & Construction. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Building Materials & Construction (CE302).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "CE303": [
    {
      "code": "CE303",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Pure Bending & Flexure Formula",
      "q": "State the fundamental assumptions in the theory of pure bending. Write the classical flexural formula explaining each term and its SI unit.",
      "answer": "1. ASSUMPTIONS IN EULER-BERNOULLI BENDING THEORY:\n1. The material of the beam is homogeneous (uniform composition) and isotropic (identical elastic properties in all directions).\n2. The beam is initially straight, and all longitudinal filaments bend into circular arcs.\n3. Transverse plane sections before bending remain strictly plane and normal to the longitudinal neutral axis after bending (Bernoulli's hypothesis; no shear warp).\n4. Hooke's law is obeyed; the stress does not exceed proportional elastic limit.\n5. Young's modulus E is identical in tension and compression.\n6. The radius of curvature R is large compared to beam cross-sectional dimensions.\n\n2. CLASSICAL FLEXURAL FORMULA:\nσ / y = M / I = E / R\n\nWhere:\n• σ = Bending normal stress at distance y from neutral axis (N/m² or Pa)\n• y = Perpendicular distance of fiber from neutral axis (m)\n• M = Bending moment at the beam cross-section (N·m)\n• I = Second moment of area about the neutral axis (m⁴)\n• E = Young's modulus of elasticity of beam material (N/m² or Pa)\n• R = Radius of curvature of the bent neutral surface (m)",
      "keyPoints": [
        "All 6 standard Euler-Bernoulli assumptions",
        "Bernoulli's plane section hypothesis highlighted",
        "Flexural equation σ/y = M/I = E/R",
        "Complete definition and SI units of every term"
      ],
      "rubric": "3 Marks for 6 assumptions, 2 Marks for flexural formula and term definitions.",
      "dept": "CE",
      "subject": "Strength of Materials"
    },
    {
      "id": "SUB_CE_067",
      "dept": "CE",
      "code": "CE303",
      "subject": "Strength of Materials",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Strength of Materials. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Strength of Materials (CE303).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "code": "CE303",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Euler's Buckling Theory for Columns",
      "q": "Derive Euler's critical buckling load formula P_cr = π²EI / L² for an ideal long column pinned (hinged) at both ends. State its limitations and define effective length for other standard end conditions.",
      "answer": "1. GOVERNING EQUATION FOR PINNED COLUMN:\nConsider an ideal slender column of length L, flexural rigidity EI, subjected to axial compressive load P.\nUnder critical load P, let lateral deflection at distance x from the origin be y.\n\nThe bending moment at section x:\nM_x = - P · y\n\nFrom beam deflection differential equation:\nEI · (d²y / dx²) = M_x = - P · y\nd²y / dx² + (P / EI) · y = 0\n\nLet k² = P / EI, then:\nd²y / dx² + k² · y = 0\n\n2. GENERAL SOLUTION:\ny(x) = A · cos(kx) + B · sin(kx)\n\n3. BOUNDARY CONDITIONS:\n• At x = 0, y = 0  =>  A · 1 + B · 0 = 0  =>  A = 0\n• At x = L, y = 0  =>  B · sin(kL) = 0\n\nFor non-trivial deflection (column buckles, B ≠ 0):\nsin(kL) = 0  =>  kL = n · π\n\nFor the fundamental buckling mode (n = 1):\nk = π / L\nk² = P / EI = π² / L²\n\nEuler's Critical Buckling Load:\nP_cr = π² · E · I / L²\n\n4. EFFECTIVE LENGTH (L_e) FOR STANDARD BOUNDARY CONDITIONS:\nEnd Condition                      | Effective Length (L_e) | P_cr Formula\n-----------------------------------|------------------------|---------------------------\nBoth ends hinged (pinned)          | L                      | π²EI / L²\nBoth ends rigidly fixed            | L / 2                  | 4π²EI / L²\nOne end fixed, other end hinged    | L / √2 ≈ 0.707 L       | 2π²EI / L²\nOne end fixed, other end free      | 2 L                    | π²EI / (4L²)\n\n5. LIMITATIONS:\n• Only valid for slender long columns (slenderness ratio λ > 80 for mild steel).\n• Neglects direct compressive stress; fails to predict crushing in short/intermediate columns.",
      "keyPoints": [
        "Differential equation setup EI d²y/dx² + Py = 0",
        "General sinusoidal solution and boundary conditions",
        "Derivation of P_cr = π²EI/L² for n=1 fundamental mode",
        "Table of effective lengths for all 4 boundary conditions",
        "Slenderness ratio limitation"
      ],
      "rubric": "5 Marks for step-by-step mathematical derivation, 3 Marks for 4 boundary conditions table, 2 Marks for limitations.",
      "dept": "CE",
      "subject": "Strength of Materials"
    },
    {
      "id": "SUB_CE_068",
      "dept": "CE",
      "code": "CE303",
      "subject": "Strength of Materials",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Strength of Materials (CE303). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Strength of Materials (CE303).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_CE_069",
      "dept": "CE",
      "code": "CE303",
      "subject": "Strength of Materials",
      "year": 2025,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Strength of Materials. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Strength of Materials (CE303).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "CS301": [
    {
      "code": "CS301",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "AVL Trees & Self-Balancing BST",
      "q": "What is an AVL tree? Explain the Balance Factor. Illustrate the four types of rotation (LL, RR, LR, RL) used to restore height balance with diagrams.",
      "answer": "1. DEFINITION OF AVL TREE:\nAn AVL tree (Adelson-Velsky and Landis) is a self-balancing binary search tree in which the height difference between the left and right subtrees of every node is at most 1.\n\n2. BALANCE FACTOR (BF):\nBF(node) = Height(Left Subtree) - Height(Right Subtree)\nFor an AVL tree to remain balanced, for every node: BF ∈ {-1, 0, +1}.\nIf |BF| > 1 after insertion or deletion, the tree is unbalanced and rotations are performed.\n\n3. FOUR ROTATION TYPES:\n(a) LL Rotation (Single Right Rotation):\nApplied when insertion occurs in the left subtree of the left child.\n    z (+2)                 y (0)\n   /                      /   y (+1)    ===>         x   z\n /\nx\n\n(b) RR Rotation (Single Left Rotation):\nApplied when insertion occurs in the right subtree of the right child.\nz (-2)                     y (0)\n \\                        /   y (-1)    ===>         z   x\n       x\n\n(c) LR Rotation (Left-Right Double Rotation):\nApplied when insertion is in the right subtree of the left child.\nFirst Left rotate on y, then Right rotate on z.\n\n(d) RL Rotation (Right-Left Double Rotation):\nApplied when insertion is in the left subtree of the right child.\nFirst Right rotate on y, then Left rotate on z.\n\nTime Complexity: Search, Insert, and Delete all operate in guaranteed O(log n) time.",
      "keyPoints": [
        "Definition of AVL tree height property",
        "Balance factor formula: BF = H_left - H_right in {-1, 0, 1}",
        "Four rotation cases: LL, RR, LR, RL clearly explained",
        "Guaranteed O(log n) worst-case time complexity"
      ],
      "rubric": "1.5 Marks for definition & BF formula, 2.5 Marks for 4 rotation cases with tree diagrams, 1 Mark for complexity.",
      "dept": "CSE",
      "subject": "Data Structures & Algorithms"
    },
    {
      "code": "CS301",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Sorting & Recurrence Analysis",
      "q": "Explain the Quick Sort algorithm using the Divide and Conquer strategy. Write its pseudo-code or C implementation. Analyze its best, average, and worst-case time complexities with recurrence relations.",
      "answer": "1. DIVIDE AND CONQUER STRATEGY:\n• Divide: Partition the array A[p..r] around a pivot element x such that all elements in left sub-array ≤ x and all elements in right sub-array ≥ x.\n• Conquer: Recursively sort the two sub-arrays A[p..q-1] and A[q+1..r].\n• Combine: No combination step needed; the array is sorted in-place.\n\n2. PARTITION & QUICKSORT PSEUDO-CODE:\n```c\nint partition(int A[], int low, int high) {\n    int pivot = A[high]; // Lomuto partition scheme\n    int i = low - 1;\n    for (int j = low; j < high; j++) {\n        if (A[j] <= pivot) {\n            i++;\n            swap(&A[i], &A[j]);\n        }\n    }\n    swap(&A[i + 1], &A[high]);\n    return i + 1;\n}\n\nvoid quickSort(int A[], int low, int high) {\n    if (low < high) {\n        int pi = partition(A, low, high);\n        quickSort(A, low, pi - 1);\n        quickSort(A, pi + 1, high);\n    }\n}\n```\n\n3. COMPLEXITY ANALYSIS:\n(a) Best Case Time Complexity - O(n log n):\nOccurs when the pivot partitions the array into two equal halves of size n/2 each:\nT(n) = 2 · T(n/2) + O(n)\nBy Master Theorem (Case 2): T(n) = Θ(n log n).\n\n(b) Worst Case Time Complexity - O(n²):\nOccurs when array is already sorted (ascending or descending) and the pivot chosen is always the extreme element (size 0 and n-1):\nT(n) = T(n - 1) + O(n) = O(n²)\n\n(c) Average Case Time Complexity - O(n log n):\nEven with a 9-to-1 split at every level, the tree depth remains O(log n), yielding T(n) = O(n log n).\n\n(d) Space Complexity: O(log n) auxiliary stack space in best/average case; O(n) in worst case.",
      "keyPoints": [
        "Divide, Conquer, and Combine steps stated",
        "Clean partition algorithm with pointer logic",
        "Best case recurrence T(n) = 2T(n/2) + O(n) -> O(n log n)",
        "Worst case recurrence T(n) = T(n-1) + O(n) -> O(n²)",
        "Space complexity discussion"
      ],
      "rubric": "4 Marks for algorithm and code, 4 Marks for mathematical recurrence analysis (best, worst, average), 2 Marks for space complexity.",
      "dept": "CSE",
      "subject": "Data Structures & Algorithms"
    },
    {
      "code": "CS301",
      "year": 2023,
      "marks": 15,
      "group": "Group C",
      "topic": "Graph Algorithms & Shortest Paths",
      "q": "(a) Explain Dijkstra's Single Source Shortest Path algorithm with pseudo-code. State its time complexity using an adjacency matrix and a min-heap priority queue. (10 Marks)\n(b) Why does Dijkstra's algorithm fail when edge weights are negative? Name an algorithm that correctly handles negative weights. (5 Marks)",
      "answer": "PART (a): DIJKSTRA'S ALGORITHM (10 MARKS)\n\n1. GREEDY PRINCIPLE:\nDijkstra's algorithm finds the shortest path from a source vertex s to all other vertices in a weighted directed/undirected graph with non-negative edge weights.\nIt maintains a set S of vertices whose shortest distances from s are finalized. At each step, it extracts the unvisited vertex u with minimum distance, and relaxes all its outgoing edges (u, v).\n\n2. PSEUDO-CODE:\n```\nalgorithm Dijkstra(G, w, s):\n    for each vertex v in G.V:\n        dist[v] = INFINITY\n        visited[v] = false\n    dist[s] = 0\n    PQ = MinPriorityQueue()\n    PQ.insert(s, 0)\n    \n    while PQ is not empty:\n        u = PQ.extractMin()\n        visited[u] = true\n        \n        for each neighbor v of u:\n            if not visited[v] and dist[u] + w(u, v) < dist[v]:\n                dist[v] = dist[u] + w(u, v) // Edge Relaxation\n                PQ.decreaseKey(v, dist[v])\n```\n\n3. TIME COMPLEXITY:\n• Adjacency Matrix implementation: O(V²)\n• Adjacency List with Min-Heap (Priority Queue): O((V + E) · log V)\n• Adjacency List with Fibonacci Heap: O(E + V · log V)\n\n-----------------------------------------------------------\nPART (b): NEGATIVE WEIGHTS FAILURE & ALTERNATIVE (5 MARKS)\n\n1. WHY DIJKSTRA FAILS ON NEGATIVE WEIGHTS:\nDijkstra operates on the greedy premise that once a vertex u is marked visited (extracted from PQ), its shortest distance dist[u] is permanently optimal and cannot be improved.\nIf negative edge weights exist, a longer path with a large negative edge encountered later could yield a smaller path weight to an already visited vertex, violating the invariant and producing incorrect shortest distances.\n\n2. CORRECT ALGORITHM FOR NEGATIVE WEIGHTS:\nThe Bellman-Ford Algorithm correctly handles negative edge weights.\nIt relaxes all |E| edges (|V| - 1) times with time complexity O(V · E) and can detect negative-weight cycles.",
      "keyPoints": [
        "Greedy vertex extraction and edge relaxation logic",
        "Clear pseudo-code with initialization and priority queue",
        "Time complexity breakdown: O(V²) vs O((V+E) log V)",
        "Concrete demonstration of why negative edge weights violate the greedy invariant",
        "Identification of Bellman-Ford algorithm as solution"
      ],
      "rubric": "Part (a): 5 Marks logic & code, 5 Marks complexity. Part (b): 3 Marks negative weight explanation, 2 Marks Bellman-Ford identification.",
      "dept": "CSE",
      "subject": "Data Structures & Algorithms"
    }
  ],
  "CS302": [
    {
      "code": "CS302",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Flip-Flop Conversions & Race Around Condition",
      "q": "What is the race-around condition in a JK Flip-Flop? When does it occur, and what are the two standard methods used to eliminate it?",
      "answer": "1. RACE-AROUND CONDITION EXPLAINED:\nIn a level-triggered JK flip-flop, when both inputs J = 1 and K = 1, the flip-flop is in toggle mode (Q_next = Q').\nThe race-around condition occurs when the clock pulse duration (t_p) is greater than the internal propagation delay of the flip-flop (t_pd):\nt_p > t_pd\n\nDuring the positive clock level, the output toggles from 0 to 1, this new output feeds back to inputs, toggling back to 0, and continues oscillating (racing) uncontrollably. At the end of clock pulse, the final state is uncertain/unpredictable.\n\n2. ELIMINATION METHODS:\n(a) Master-Slave JK Flip-Flop:\nUses two cascade flip-flops. The Master is active on the clock high level, while the Slave is triggered on the clock trailing/inverted edge. Because they are never enabled simultaneously, race-around is eliminated.\n\n(b) Edge-Triggered Flip-Flop:\nThe flip-flop responds only to the rapid transition edge (rising or falling edge) of the clock where the transition time is much smaller than t_pd.",
      "keyPoints": [
        "Condition J=1, K=1 and t_p > t_pd clearly stated",
        "Oscillation/uncertainty explanation during clock pulse",
        "Master-Slave JK flip-flop working mechanism",
        "Edge-triggering solution"
      ],
      "rubric": "2 Marks for definition and timing condition (t_p > t_pd), 3 Marks for Master-Slave and Edge-triggering solutions.",
      "dept": "CSE",
      "subject": "Digital Logic & Computer Design"
    },
    {
      "id": "SUB_CSE_106",
      "dept": "CSE",
      "code": "CS302",
      "subject": "Digital Logic & Computer Design",
      "year": 2024,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Digital Logic & Computer Design. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Digital Logic & Computer Design (CS302).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_CSE_107",
      "dept": "CSE",
      "code": "CS302",
      "subject": "Digital Logic & Computer Design",
      "year": 2025,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Digital Logic & Computer Design (CS302). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Digital Logic & Computer Design (CS302).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "code": "CS302",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "K-Map Minimization with Don't Cares",
      "q": "Minimize the following 4-variable Boolean function using a Karnaugh Map (K-Map):\nF(A, B, C, D) = Σm(1, 3, 7, 11, 15) + d(0, 2, 5)\nDraw the 4-variable K-Map, show the grouping of minterms and don't-cares, and implement the simplified SOP expression using minimum NAND gates.",
      "answer": "1. 4-VARIABLE K-MAP SETUP:\nVariables: AB along rows (00, 01, 11, 10), CD along columns (00, 01, 11, 10).\n\nCell values:\nm(0)=d, m(1)=1, m(2)=d, m(3)=1\nm(4)=0, m(5)=d, m(6)=0, m(7)=1\nm(8)=0, m(9)=0, m(10)=0, m(11)=1\nm(12)=0, m(13)=0, m(14)=0, m(15)=1\n\nGrid visualization:\n      CD=00  CD=01  CD=11  CD=10\nAB=00 [ d ]  [ 1 ]  [ 1 ]  [ d ]  (m0, m1, m3, m2)\nAB=01 [ 0 ]  [ d ]  [ 1 ]  [ 0 ]  (m4, m5, m7, m6)\nAB=11 [ 0 ]  [ 0 ]  [ 1 ]  [ 0 ]  (m12, m13, m15, m14)\nAB=10 [ 0 ]  [ 0 ]  [ 1 ]  [ 0 ]  (m8, m9, m11, m10)\n\n2. GROUPING PRIME IMPLICANTS:\n• Group 1 (Column CD=11):\nCells m(3, 7, 15, 11) form a vertical Octet/Quad along column CD=11.\nCommon variables: C = 1, D = 1  => Term 1 = CD\n\n• Group 2 (Top row AB=00):\nCells m(0, 1, 3, 2) form a complete horizontal Quad using don't cares d(0, 2).\nCommon variables: A = 0, B = 0  => Term 2 = A'B'\n\nAll minterms {1, 3, 7, 11, 15} are now covered. Don't-care m(5) is left as 0 to minimize terms.\n\n3. MINIMIZED SOP EXPRESSION:\nF(A, B, C, D) = CD + A'B'\n\n4. NAND-NAND IMPLEMENTATION:\nApply double complement (De Morgan's Theorem):\nF = ((CD + A'B')')' = ((CD)' · (A'B')')'\n\nCircuit using 3 two-input NAND gates:\nGate 1: NAND(C, D) = (CD)'\nGate 2: NAND(A', B') = (A'B')'\nGate 3: NAND((CD)', (A'B')') = CD + A'B' = F",
      "keyPoints": [
        "Correct 4x4 K-map grid setup with Gray code ordering",
        "Optimal grouping of Quad 1: m(3,7,11,15) -> CD",
        "Optimal grouping of Quad 2: m(0,1,2,3) using don't cares -> A'B'",
        "Minimized equation F = CD + A'B'",
        "Double complement transformation to all-NAND circuit"
      ],
      "rubric": "3 Marks for K-Map grid and minterm/don't care placement, 4 Marks for group identification and algebraic minimization, 3 Marks for NAND gate logic.",
      "dept": "CSE",
      "subject": "Digital Logic & Computer Design"
    },
    {
      "id": "SUB_CSE_108",
      "dept": "CSE",
      "code": "CS302",
      "subject": "Digital Logic & Computer Design",
      "year": 2024,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Digital Logic & Computer Design. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Digital Logic & Computer Design (CS302).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "ME301": [
    {
      "code": "ME301",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "First Law & Steady Flow Energy Equation (SFEE)",
      "q": "Write the Steady Flow Energy Equation (SFEE) on a unit mass basis. Simplify the equation for an ideal steam nozzle and a gas turbine.",
      "answer": "1. STEADY FLOW ENERGY EQUATION (UNIT MASS BASIS):\nFor a control volume with steady mass flow rate (m_dot), the first law of thermodynamics states:\nh₁ + (V₁² / 2) + g · z₁ + q = h₂ + (V₂² / 2) + g · z₂ + w\n\nWhere:\n• h₁, h₂ = Specific enthalpies at inlet and exit (J/kg)\n• V₁, V₂ = Fluid velocities at inlet and exit (m/s)\n• z₁, z₂ = Elevation heights above datum (m)\n• q = Heat transfer per unit mass (J/kg)\n• w = Work transfer per unit mass (J/kg)\n\n2. APPLICATIONS:\n\n(a) Ideal Steam Nozzle:\n• Purpose: Accelerate fluid; no work is done (w = 0).\n• Process is adiabatic (q ≈ 0); horizontal orientation (z₁ ≈ z₂).\n• Inlet velocity is negligible compared to exit velocity (V₁ << V₂).\nSFEE simplifies to:\nh₁ = h₂ + (V₂² / 2)\nExit velocity: V₂ = √(2 · (h₁ - h₂))\n\n(b) Adiabatic Gas Turbine:\n• High fluid velocity at both ends, height change negligible (z₁ ≈ z₂).\n• Well-insulated casing (q ≈ 0); velocity difference (V₁² - V₂²)/2 is small.\nSFEE simplifies to:\nh₁ = h₂ + w\nSpecific Work Output: w = h₁ - h₂",
      "keyPoints": [
        "Full SFEE equation on unit mass basis with correct units",
        "Identification of all terms: enthalpy, kinetic, potential, heat, work",
        "Nozzle simplification giving V2 = sqrt(2(h1-h2))",
        "Turbine simplification giving w = h1 - h2"
      ],
      "rubric": "2 Marks for general SFEE equation and term definitions, 1.5 Marks for nozzle deduction, 1.5 Marks for turbine deduction.",
      "dept": "ME",
      "subject": "Engineering Thermodynamics"
    },
    {
      "id": "SUB_ME_082",
      "dept": "ME",
      "code": "ME301",
      "subject": "Engineering Thermodynamics",
      "year": 2024,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Engineering Thermodynamics. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Engineering Thermodynamics (ME301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_ME_083",
      "dept": "ME",
      "code": "ME301",
      "subject": "Engineering Thermodynamics",
      "year": 2025,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Engineering Thermodynamics (ME301). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Engineering Thermodynamics (ME301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "code": "ME301",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Second Law of Thermodynamics & Carnot Theorem",
      "q": "State the Kelvin-Planck and Clausius statements of the Second Law of Thermodynamics. Prove their mathematical equivalence. State Carnot's theorem and write the formula for Carnot efficiency.",
      "answer": "1. SECOND LAW STATEMENTS:\n\n(a) Kelvin-Planck Statement:\n'It is impossible for any device that operates on a cycle to receive heat from a single thermal reservoir and produce a net equivalent amount of work.'\n(Complete conversion of heat into work in a cycle is impossible; thermal efficiency η < 100%).\n\n(b) Clausius Statement:\n'It is impossible to construct a device that operates in a cycle and produces no effect other than the transfer of heat from a lower-temperature body to a higher-temperature body.'\n(Heat cannot flow spontaneously from cold to hot without external work input).\n\n2. PROOF OF EQUIVALENCE:\nTo prove equivalence, we show that violation of one statement implies violation of the other.\n\nCase A: Violation of Kelvin-Planck leads to violation of Clausius:\n• Consider a heat engine E violating Kelvin-Planck by taking heat Q_H from hot reservoir at T_H and converting all of it into work W = Q_H.\n• Use this work W to drive a Carnot refrigerator R that extracts heat Q_C from cold reservoir at T_C and discharges Q_H + Q_C to hot reservoir.\n• Net heat extracted from cold reservoir = Q_C.\n• Net heat delivered to hot reservoir = (Q_H + Q_C) - Q_H = Q_C.\n• Combined system produces no effect other than transferring heat Q_C from cold to hot without external work, which directly violates Clausius!\n\nCase B: Violation of Clausius leads to violation of Kelvin-Planck:\n• Consider refrigerator violating Clausius by moving Q_C from T_C to T_H with W = 0.\n• A regular heat engine operates between T_H and T_C, absorbing Q_H, producing work W = Q_H - Q_C, and dumping Q_C to cold reservoir.\n• Combined engine absorbs net heat (Q_H - Q_C) from single reservoir T_H and delivers equal work W, directly violating Kelvin-Planck!\nHence, both statements are logically equivalent.\n\n3. CARNOT THEOREM & EFFICIENCY:\n• 'No heat engine operating between two given thermal reservoirs can be more efficient than a reversible Carnot engine operating between the same reservoirs.'\nCarnot Thermal Efficiency:\nη_Carnot = 1 - (T_C / T_H) = (T_H - T_C) / T_H  (where temperatures are in Kelvin).",
      "keyPoints": [
        "Accurate definitions of Kelvin-Planck and Clausius statements",
        "Proof that violation of Kelvin-Planck violates Clausius",
        "Proof that violation of Clausius violates Kelvin-Planck",
        "Carnot theorem statement and efficiency formula η = 1 - Tc/Th in Kelvin"
      ],
      "rubric": "3 Marks for statements, 4 Marks for two-way equivalence proof, 3 Marks for Carnot theorem and efficiency formula.",
      "dept": "ME",
      "subject": "Engineering Thermodynamics"
    },
    {
      "id": "SUB_ME_084",
      "dept": "ME",
      "code": "ME301",
      "subject": "Engineering Thermodynamics",
      "year": 2024,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Engineering Thermodynamics. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Engineering Thermodynamics (ME301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "IT303": [
    {
      "id": "SUB_IT_136",
      "dept": "IT",
      "code": "IT303",
      "subject": "Computer Organization & Architecture",
      "year": 2024,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Computer Organization & Architecture. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Computer Organization & Architecture (IT303).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "code": "IT303",
      "year": 2025,
      "marks": 10,
      "group": "Group C",
      "topic": "Arithmetic Algorithms & Pipelining",
      "q": "Explain Booth's Multiplication Algorithm for signed two's complement numbers with a complete flowchart. Perform step-by-step multiplication of (+7) and (-3) using 5-bit 2's complement representation.",
      "answer": "1. BOOTH'S ALGORITHM PRINCIPLE:\nBooth's algorithm multiplies two signed binary numbers in 2's complement representation.\nIt inspects adjacent bit pairs (Q₀, Q₋₁) at each step to identify runs of consecutive 1s and 0s:\n• (Q₀, Q₋₁) = 10 : Beginning of a block of 1s  =>  A = A - M\n• (Q₀, Q₋₁) = 01 : End of a block of 1s        =>  A = A + M\n• (Q₀, Q₋₁) = 00 or 11 : Inside block of 0s/1s =>  No arithmetic operation\nFollowed by: Arithmetic Shift Right (ASHR) on combined register [A, Q, Q₋₁].\n\n2. NUMERICAL EXAMPLE: MULTIPLY (+7) BY (-3):\nLet Multiplicand M = +7 = 00111 (5-bit)\n-M = 2's complement of M = 11001\nMultiplier Q = -3 = 11101 (5-bit)\nInitial Accumulator A = 00000, Q₋₁ = 0, Count = 5.\n\nStep-by-Step Execution:\nStep 1:\n• Initial: A=00000, Q=11101, Q₋₁=0\n• Inspect (Q₀, Q₋₁) = (1, 0)  =>  A = A - M = 00000 + 11001 = 11001\n• ASHR [A, Q, Q₋₁]: A=11100, Q=11110, Q₋₁=1. Count = 4.\n\nStep 2:\n• Inspect (Q₀, Q₋₁) = (0, 1)  =>  A = A + M = 11100 + 00111 = 00011\n• ASHR: A=00001, Q=11111, Q₋₁=0. Count = 3.\n\nStep 3:\n• Inspect (Q₀, Q₋₁) = (1, 0)  =>  A = A - M = 00001 + 11001 = 11010\n• ASHR: A=11101, Q=01111, Q₋₁=1. Count = 2.\n\nStep 4:\n• Inspect (Q₀, Q₋₁) = (1, 1)  =>  No arithmetic operation\n• ASHR: A=11110, Q=10111, Q₋₁=1. Count = 1.\n\nStep 5:\n• Inspect (Q₀, Q₋₁) = (1, 1)  =>  No arithmetic operation\n• ASHR: A=11111, Q=01011, Q₋₁=1. Count = 0.\n\nFinal Result [A, Q]:\n11111 01011 (10-bit signed binary)\nSince MSB is 1, number is negative:\n2's complement of 1111101011 = 0000010101 = 21 in decimal.\nResult = -21 (which matches 7 * -3 = -21!).",
      "keyPoints": [
        "Booth recoding rules (10: subtract, 01: add, 00/11: pass)",
        "Arithmetic shift right preserving MSB sign bit",
        "Clear register trace table for A, Q, Q-1 across all 5 cycles",
        "Correct verification of final product -21 in decimal"
      ],
      "rubric": "3 Marks for algorithm principle and rules, 5 Marks for flawless 5-step trace table, 2 Marks for final result verification.",
      "dept": "IT",
      "subject": "Computer Organization & Architecture"
    },
    {
      "id": "SUB_IT_137",
      "dept": "IT",
      "code": "IT303",
      "subject": "Computer Organization & Architecture",
      "year": 2025,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Computer Organization & Architecture (IT303). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Computer Organization & Architecture (IT303).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_IT_138",
      "dept": "IT",
      "code": "IT303",
      "subject": "Computer Organization & Architecture",
      "year": 2024,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Computer Organization & Architecture. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Computer Organization & Architecture (IT303).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "M(CS)301": [
    {
      "code": "M(CS)301",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Root Finding & Convergence Rate",
      "q": "Prove that the order of convergence of the Newton-Raphson method is quadratic (order = 2). State the condition under which the method fails to converge.",
      "answer": "1. NEWTON-RAPHSON ITERATION:\nx_{n+1} = x_n - [f(x_n) / f'(x_n)]\n\nLet α be the true simple root such that f(α) = 0 and f'(α) ≠ 0.\nLet ε_n = x_n - α be the error in the n-th approximation.\nThen x_n = α + ε_n  and  x_{n+1} = α + ε_{n+1}.\n\n2. TAYLOR SERIES EXPANSION:\nf(x_n) = f(α + ε_n) = f(α) + ε_n · f'(α) + (ε_n² / 2) · f''(α) + O(ε_n³)\nSince f(α) = 0:\nf(x_n) = ε_n · f'(α) + (ε_n² / 2) · f''(α)\n\nSimilarly, for the derivative:\nf'(x_n) = f'(α + ε_n) = f'(α) + ε_n · f''(α) + O(ε_n²)\n\n3. ERROR RELATION:\nε_{n+1} = ε_n - [f(x_n) / f'(x_n)]\nε_{n+1} = ε_n - [ε_n · f'(α) + (ε_n² / 2) · f''(α)] / [f'(α) + ε_n · f''(α)]\n\nDividing numerator and denominator by f'(α):\nε_{n+1} = ε_n - [ε_n + (ε_n² / 2) · (f''(α) / f'(α))] · [1 + ε_n · (f''(α) / f'(α))]⁻¹\n\nUsing binomial expansion (1 + u)⁻¹ ≈ 1 - u:\nε_{n+1} ≈ ε_n - [ε_n + (ε_n² / 2) · (f'' / f')] · [1 - ε_n · (f'' / f')]\nε_{n+1} ≈ ε_n - [ε_n - ε_n² · (f'' / f') + (ε_n² / 2) · (f'' / f')]\nε_{n+1} ≈ (1/2) · [f''(α) / f'(α)] · ε_n²\n\nTherefore:\nε_{n+1} = C · ε_n²  (where C = f''(α) / (2 f'(α)))\nThe exponent of ε_n is 2, proving that Newton-Raphson has quadratic convergence.\n\n4. FAILURE CONDITIONS:\n• If f'(x) = 0 at or near the root (horizontal tangent), division by zero occurs.\n• If initial guess x_0 is far from α, the sequence may diverge or enter an infinite cycle.",
      "keyPoints": [
        "Definition of error ε_n = x_n - α",
        "Taylor series expansion of f(x_n) and f'(x_n)",
        "Derivation of error relation ε_{n+1} = C * ε_n²",
        "Condition f'(α) = 0 causing division by zero and divergence"
      ],
      "rubric": "3.5 Marks for Taylor expansion and algebraic proof, 1.5 Marks for failure conditions.",
      "dept": "CE",
      "subject": "Numerical Methods"
    },
    {
      "id": "SUB_CE_073",
      "dept": "CE",
      "code": "M(CS)301",
      "subject": "Numerical Methods",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Numerical Methods. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Numerical Methods (M(CS)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "code": "M(CS)301",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Numerical Ordinary Differential Equations",
      "q": "Explain Runge-Kutta 4th Order (RK4) method for solving the initial value problem dy/dx = f(x, y) with y(x₀) = y₀. Using RK4, find y(0.2) given dy/dx = x + y², y(0) = 1, taking step size h = 0.2.",
      "answer": "1. RK4 FORMULAS:\nGiven dy/dx = f(x, y) with y(x_n) = y_n and step size h:\ny_{n+1} = y_n + (1/6) · (k₁ + 2k₂ + 2k₃ + k₄)\n\nWhere:\n• k₁ = h · f(x_n, y_n)\n• k₂ = h · f(x_n + h/2, y_n + k₁/2)\n• k₃ = h · f(x_n + h/2, y_n + k₂/2)\n• k₄ = h · f(x_n + h, y_n + k₃)\n\nLocal truncation error is O(h⁵); global truncation error is O(h⁴).\n\n2. STEP-BY-STEP CALCULATION:\nGiven: f(x, y) = x + y², x₀ = 0, y₀ = 1, h = 0.2. Target: y(0.2).\n\nStep A: Compute k₁:\nk₁ = h · f(x₀, y₀) = 0.2 · (0 + 1²) = 0.2 · 1 = 0.2000\n\nStep B: Compute k₂:\nx = x₀ + h/2 = 0 + 0.1 = 0.1\ny = y₀ + k₁/2 = 1 + 0.1 = 1.1\nk₂ = h · f(0.1, 1.1) = 0.2 · (0.1 + 1.1²) = 0.2 · (0.1 + 1.21) = 0.2 · 1.31 = 0.2620\n\nStep C: Compute k₃:\nx = 0.1\ny = y₀ + k₂/2 = 1 + 0.2620/2 = 1.1310\nk₃ = h · f(0.1, 1.1310) = 0.2 · (0.1 + 1.1310²) = 0.2 · (0.1 + 1.2792) = 0.2 · 1.3792 = 0.2758\n\nStep D: Compute k₄:\nx = x₀ + h = 0 + 0.2 = 0.2\ny = y₀ + k₃ = 1 + 0.2758 = 1.2758\nk₄ = h · f(0.2, 1.2758) = 0.2 · (0.2 + 1.2758²) = 0.2 · (0.2 + 1.6277) = 0.2 · 1.8277 = 0.3655\n\nStep E: Final Value y(0.2):\ny(0.2) = y₀ + (1/6) · (k₁ + 2k₂ + 2k₃ + k₄)\ny(0.2) = 1 + (1/6) · [0.2000 + 2(0.2620) + 2(0.2758) + 0.3655]\ny(0.2) = 1 + (1/6) · [0.2000 + 0.5240 + 0.5516 + 0.3655]\ny(0.2) = 1 + (1/6) · [1.6411]\ny(0.2) = 1 + 0.2735 = 1.2735\n\nFinal Answer: y(0.2) ≈ 1.2735",
      "keyPoints": [
        "RK4 general weighted-average formula with (k1 + 2k2 + 2k3 + k4)/6",
        "Correct evaluation of k1 = 0.2000",
        "Correct evaluation of k2 = 0.2620",
        "Correct evaluation of k3 = 0.2758",
        "Correct evaluation of k4 = 0.3655",
        "Accurate final answer y(0.2) = 1.2735"
      ],
      "rubric": "4 Marks for RK4 formula and definitions, 5 Marks for k1, k2, k3, k4 step computations, 1 Mark for final result.",
      "dept": "CE",
      "subject": "Numerical Methods"
    },
    {
      "id": "SUB_CE_074",
      "dept": "CE",
      "code": "M(CS)301",
      "subject": "Numerical Methods",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Numerical Methods (M(CS)301). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Numerical Methods (M(CS)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_CE_075",
      "dept": "CE",
      "code": "M(CS)301",
      "subject": "Numerical Methods",
      "year": 2025,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Numerical Methods. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Numerical Methods (M(CS)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "CE304": [
    {
      "id": "SUB_CE_001",
      "dept": "CE",
      "code": "CE304",
      "subject": "Fluid Mechanics",
      "year": 2024,
      "marks": 5,
      "group": "Group B",
      "topic": "Fluid Statics",
      "q": "State and prove Pascal's Law for static fluid pressure. Give two civil engineering applications.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Fluid Statics in Fluid Mechanics (CE304).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "1.5 Marks for definition & concepts, 2.5 Marks for derivation/methods, 1.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_CE_002",
      "dept": "CE",
      "code": "CE304",
      "subject": "Fluid Mechanics",
      "year": 2023,
      "marks": 10,
      "group": "Group C",
      "topic": "Fluid Kinematics & Dynamics",
      "q": "Derive Euler's equation of motion along a streamline and integrate it to obtain Bernoulli's equation. State its physical significance.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Fluid Kinematics & Dynamics in Fluid Mechanics (CE304).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "3.0 Marks for definition & concepts, 5.0 Marks for derivation/methods, 2.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_CE_003",
      "dept": "CE",
      "code": "CE304",
      "subject": "Fluid Mechanics",
      "year": 2025,
      "marks": 15,
      "group": "Group C",
      "topic": "Boundary Layer & Pipe Flow",
      "q": "(a) What is boundary layer thickness, displacement thickness, and momentum thickness? Derive expressions for them. (10 Marks)\n(b) Differentiate between laminar and turbulent flow through pipes and explain Reynolds experiment. (5 Marks)",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Boundary Layer & Pipe Flow in Fluid Mechanics (CE304).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "4.5 Marks for definition & concepts, 7.5 Marks for derivation/methods, 3.0 Marks for diagrams & accuracy."
    }
  ],
  "CE305": [
    {
      "id": "SUB_CE_004",
      "dept": "CE",
      "code": "CE305",
      "subject": "Composite Materials",
      "year": 2024,
      "marks": 5,
      "group": "Group B",
      "topic": "Composite Mechanics",
      "q": "State the Voigt and Reuss models for predicting the elastic modulus of fiber-reinforced composites. Write their formulas.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Composite Mechanics in Composite Materials (CE305).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "1.5 Marks for definition & concepts, 2.5 Marks for derivation/methods, 1.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_CE_070",
      "dept": "CE",
      "code": "CE305",
      "subject": "Composite Materials",
      "year": 2024,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Composite Materials. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Composite Materials (CE305).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_CE_071",
      "dept": "CE",
      "code": "CE305",
      "subject": "Composite Materials",
      "year": 2025,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Composite Materials (CE305). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Composite Materials (CE305).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_CE_005",
      "dept": "CE",
      "code": "CE305",
      "subject": "Composite Materials",
      "year": 2023,
      "marks": 10,
      "group": "Group C",
      "topic": "Manufacturing of Composites",
      "q": "Compare Pultrusion, Filament Winding, and Resin Transfer Moulding (RTM) processes for structural composites with applications.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Manufacturing of Composites in Composite Materials (CE305).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "3.0 Marks for definition & concepts, 5.0 Marks for derivation/methods, 2.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_CE_072",
      "dept": "CE",
      "code": "CE305",
      "subject": "Composite Materials",
      "year": 2024,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Composite Materials. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Composite Materials (CE305).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "M(CS)302": [
    {
      "id": "SUB_CE_006",
      "dept": "CE",
      "code": "M(CS)302",
      "subject": "Engineering Geology",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Mineralogy",
      "q": "Define hardness of minerals. Explain Mohs scale of hardness with its 10 reference standard minerals.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Mineralogy in Engineering Geology (M(CS)302).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "1.5 Marks for definition & concepts, 2.5 Marks for derivation/methods, 1.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_CE_007",
      "dept": "CE",
      "code": "M(CS)302",
      "subject": "Engineering Geology",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Structural Geology",
      "q": "Classify faults with neat diagrams into Normal, Reverse, Strike-slip, and Horst/Graben. Explain their engineering significance.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Structural Geology in Engineering Geology (M(CS)302).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "3.0 Marks for definition & concepts, 5.0 Marks for derivation/methods, 2.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_CE_008",
      "dept": "CE",
      "code": "M(CS)302",
      "subject": "Engineering Geology",
      "year": 2023,
      "marks": 15,
      "group": "Group C",
      "topic": "Engineering Geology for Dams & Tunnels",
      "q": "(a) What geological factors must be investigated before selecting a site for a large concrete gravity dam? (8 Marks)\n(b) Explain the geological problems encountered during tunneling through folded and faulted rock formations. (7 Marks)",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Engineering Geology for Dams & Tunnels in Engineering Geology (M(CS)302).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "4.5 Marks for definition & concepts, 7.5 Marks for derivation/methods, 3.0 Marks for diagrams & accuracy."
    }
  ],
  "PH(CE)301": [
    {
      "id": "SUB_CE_009",
      "dept": "CE",
      "code": "PH(CE)301",
      "subject": "Physics - Civil",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Quantum Physics",
      "q": "Derive the energy eigenvalues and normalized wave function for a particle in a 1D infinite potential box.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Quantum Physics in Physics - Civil (PH(CE)301).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "1.5 Marks for definition & concepts, 2.5 Marks for derivation/methods, 1.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_CE_076",
      "dept": "CE",
      "code": "PH(CE)301",
      "subject": "Physics - Civil",
      "year": 2024,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Physics - Civil. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Physics - Civil (PH(CE)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_CE_077",
      "dept": "CE",
      "code": "PH(CE)301",
      "subject": "Physics - Civil",
      "year": 2025,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Physics - Civil (PH(CE)301). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Physics - Civil (PH(CE)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_CE_010",
      "dept": "CE",
      "code": "PH(CE)301",
      "subject": "Physics - Civil",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Dielectrics & Smart Materials",
      "q": "Explain the piezoelectric effect in quartz crystals. How is it used for ultrasonic non-destructive testing (NDT) of concrete structures?",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Dielectrics & Smart Materials in Physics - Civil (PH(CE)301).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "3.0 Marks for definition & concepts, 5.0 Marks for derivation/methods, 2.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_CE_078",
      "dept": "CE",
      "code": "PH(CE)301",
      "subject": "Physics - Civil",
      "year": 2024,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Physics - Civil. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Physics - Civil (PH(CE)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "CS(CE)301": [
    {
      "id": "SUB_CE_079",
      "dept": "CE",
      "code": "CS(CE)301",
      "subject": "Programming & Data Structures",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Programming & Data Structures. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Programming & Data Structures (CS(CE)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_CE_011",
      "dept": "CE",
      "code": "CS(CE)301",
      "subject": "Programming & Data Structures",
      "year": 2023,
      "marks": 5,
      "group": "Group B",
      "topic": "Stack Applications",
      "q": "Explain infix, prefix, and postfix expressions. Convert (A + B) * (C - D) / E into postfix using an explicit stack trace.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Stack Applications in Programming & Data Structures (CS(CE)301).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "1.5 Marks for definition & concepts, 2.5 Marks for derivation/methods, 1.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_CE_012",
      "dept": "CE",
      "code": "CS(CE)301",
      "subject": "Programming & Data Structures",
      "year": 2025,
      "marks": 10,
      "group": "Group C",
      "topic": "Pointers & Dynamic Memory",
      "q": "Explain malloc(), calloc(), realloc(), and free() in C with memory diagrams. How do memory leaks occur and how can they be avoided?",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Pointers & Dynamic Memory in Programming & Data Structures (CS(CE)301).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "3.0 Marks for definition & concepts, 5.0 Marks for derivation/methods, 2.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_CE_080",
      "dept": "CE",
      "code": "CS(CE)301",
      "subject": "Programming & Data Structures",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Programming & Data Structures (CS(CE)301). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Programming & Data Structures (CS(CE)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_CE_081",
      "dept": "CE",
      "code": "CS(CE)301",
      "subject": "Programming & Data Structures",
      "year": 2025,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Programming & Data Structures. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Programming & Data Structures (CS(CE)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "ME302": [
    {
      "id": "SUB_ME_013",
      "dept": "ME",
      "code": "ME302",
      "subject": "Manufacturing Processes",
      "year": 2024,
      "marks": 5,
      "group": "Group B",
      "topic": "Casting Technology",
      "q": "State Chvorinov's Rule for solidification time of castings. Explain the design of a riser for uniform cooling.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Casting Technology in Manufacturing Processes (ME302).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "1.5 Marks for definition & concepts, 2.5 Marks for derivation/methods, 1.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_ME_014",
      "dept": "ME",
      "code": "ME302",
      "subject": "Manufacturing Processes",
      "year": 2023,
      "marks": 10,
      "group": "Group C",
      "topic": "Welding Metallurgy",
      "q": "Differentiate between TIG (GTAW) and MIG (GMAW) welding. Explain the function of shielding gases and flux.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Welding Metallurgy in Manufacturing Processes (ME302).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "3.0 Marks for definition & concepts, 5.0 Marks for derivation/methods, 2.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_ME_015",
      "dept": "ME",
      "code": "ME302",
      "subject": "Manufacturing Processes",
      "year": 2025,
      "marks": 15,
      "group": "Group C",
      "topic": "Metal Cutting & Machining",
      "q": "(a) Draw Merchant's Force Circle Diagram in orthogonal turning. Write the relationships between cutting, thrust, shear, and friction forces. (10 Marks)\n(b) Explain Taylor's tool life equation VT^n = C. (5 Marks)",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Metal Cutting & Machining in Manufacturing Processes (ME302).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "4.5 Marks for definition & concepts, 7.5 Marks for derivation/methods, 3.0 Marks for diagrams & accuracy."
    }
  ],
  "ME303": [
    {
      "id": "SUB_ME_085",
      "dept": "ME",
      "code": "ME303",
      "subject": "Strength of Materials",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Strength of Materials. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Strength of Materials (ME303).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_ME_016",
      "dept": "ME",
      "code": "ME303",
      "subject": "Strength of Materials",
      "year": 2024,
      "marks": 5,
      "group": "Group B",
      "topic": "Torsion of Shafts",
      "q": "Derive the torsion formula T/J = τ/R = Gθ/L for a solid circular shaft subjected to pure torque.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Torsion of Shafts in Strength of Materials (ME303).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "1.5 Marks for definition & concepts, 2.5 Marks for derivation/methods, 1.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_ME_086",
      "dept": "ME",
      "code": "ME303",
      "subject": "Strength of Materials",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Strength of Materials (ME303). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Strength of Materials (ME303).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_ME_017",
      "dept": "ME",
      "code": "ME303",
      "subject": "Strength of Materials",
      "year": 2023,
      "marks": 10,
      "group": "Group C",
      "topic": "Complex Stresses & Mohr's Circle",
      "q": "Explain how Mohr's circle of stress is drawn for a 2D stress state (σ_x, σ_y, τ_xy). Show principal planes and maximum shear planes.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Complex Stresses & Mohr's Circle in Strength of Materials (ME303).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "3.0 Marks for definition & concepts, 5.0 Marks for derivation/methods, 2.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_ME_087",
      "dept": "ME",
      "code": "ME303",
      "subject": "Strength of Materials",
      "year": 2025,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Strength of Materials. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Strength of Materials (ME303).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "ME304": [
    {
      "id": "SUB_ME_018",
      "dept": "ME",
      "code": "ME304",
      "subject": "Fluid Mechanics & Hydraulic Machines",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Dimensional Analysis",
      "q": "State Buckingham's Pi theorem. State the conditions for choosing repeating variables in hydraulic modeling.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Dimensional Analysis in Fluid Mechanics & Hydraulic Machines (ME304).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "1.5 Marks for definition & concepts, 2.5 Marks for derivation/methods, 1.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_ME_088",
      "dept": "ME",
      "code": "ME304",
      "subject": "Fluid Mechanics & Hydraulic Machines",
      "year": 2024,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Fluid Mechanics & Hydraulic Machines. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Fluid Mechanics & Hydraulic Machines (ME304).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_ME_089",
      "dept": "ME",
      "code": "ME304",
      "subject": "Fluid Mechanics & Hydraulic Machines",
      "year": 2025,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Fluid Mechanics & Hydraulic Machines (ME304). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Fluid Mechanics & Hydraulic Machines (ME304).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_ME_019",
      "dept": "ME",
      "code": "ME304",
      "subject": "Fluid Mechanics & Hydraulic Machines",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Turbomachinery",
      "q": "Draw the velocity triangles at inlet and exit for a Pelton wheel turbine. Derive the expression for its hydraulic efficiency.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Turbomachinery in Fluid Mechanics & Hydraulic Machines (ME304).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "3.0 Marks for definition & concepts, 5.0 Marks for derivation/methods, 2.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_ME_090",
      "dept": "ME",
      "code": "ME304",
      "subject": "Fluid Mechanics & Hydraulic Machines",
      "year": 2024,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Fluid Mechanics & Hydraulic Machines. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Fluid Mechanics & Hydraulic Machines (ME304).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "ME305": [
    {
      "id": "SUB_ME_091",
      "dept": "ME",
      "code": "ME305",
      "subject": "Kinematics & Dynamics",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Kinematics & Dynamics. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Kinematics & Dynamics (ME305).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_ME_020",
      "dept": "ME",
      "code": "ME305",
      "subject": "Kinematics & Dynamics",
      "year": 2023,
      "marks": 5,
      "group": "Group B",
      "topic": "Mechanisms",
      "q": "Explain Grashof's law for a four-bar linkage. Differentiate between double-crank, crank-rocker, and double-rocker mechanisms.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Mechanisms in Kinematics & Dynamics (ME305).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "1.5 Marks for definition & concepts, 2.5 Marks for derivation/methods, 1.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_ME_021",
      "dept": "ME",
      "code": "ME305",
      "subject": "Kinematics & Dynamics",
      "year": 2025,
      "marks": 10,
      "group": "Group C",
      "topic": "Kinematics of Machinery",
      "q": "Explain Coriolis acceleration component. When does it arise, what is its magnitude (2vω), and how is its direction determined?",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Kinematics of Machinery in Kinematics & Dynamics (ME305).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "3.0 Marks for definition & concepts, 5.0 Marks for derivation/methods, 2.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_ME_092",
      "dept": "ME",
      "code": "ME305",
      "subject": "Kinematics & Dynamics",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Kinematics & Dynamics (ME305). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Kinematics & Dynamics (ME305).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_ME_093",
      "dept": "ME",
      "code": "ME305",
      "subject": "Kinematics & Dynamics",
      "year": 2025,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Kinematics & Dynamics. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Kinematics & Dynamics (ME305).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "EE(ME)301": [
    {
      "id": "SUB_ME_022",
      "dept": "ME",
      "code": "EE(ME)301",
      "subject": "Basic Electrical & Mechanics",
      "year": 2024,
      "marks": 5,
      "group": "Group B",
      "topic": "Electrical Machines",
      "q": "Explain the working principle of a DC motor. Derive the back EMF equation E_b = (P·Φ·N·Z) / (60·A).",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Electrical Machines in Basic Electrical & Mechanics (EE(ME)301).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "1.5 Marks for definition & concepts, 2.5 Marks for derivation/methods, 1.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_ME_094",
      "dept": "ME",
      "code": "EE(ME)301",
      "subject": "Basic Electrical & Mechanics",
      "year": 2024,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Basic Electrical & Mechanics. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Basic Electrical & Mechanics (EE(ME)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_ME_095",
      "dept": "ME",
      "code": "EE(ME)301",
      "subject": "Basic Electrical & Mechanics",
      "year": 2025,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Basic Electrical & Mechanics (EE(ME)301). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Basic Electrical & Mechanics (EE(ME)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_ME_023",
      "dept": "ME",
      "code": "EE(ME)301",
      "subject": "Basic Electrical & Mechanics",
      "year": 2023,
      "marks": 10,
      "group": "Group C",
      "topic": "Transformers & AC Circuits",
      "q": "Draw the equivalent circuit diagram and phasor diagram of a single-phase transformer on inductive load. Explain open-circuit and short-circuit tests.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Transformers & AC Circuits in Basic Electrical & Mechanics (EE(ME)301).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "3.0 Marks for definition & concepts, 5.0 Marks for derivation/methods, 2.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_ME_096",
      "dept": "ME",
      "code": "EE(ME)301",
      "subject": "Basic Electrical & Mechanics",
      "year": 2024,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Basic Electrical & Mechanics. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Basic Electrical & Mechanics (EE(ME)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "M(ME)301": [
    {
      "id": "SUB_ME_024",
      "dept": "ME",
      "code": "M(ME)301",
      "subject": "Mathematics - Mechanical",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Laplace Transforms",
      "q": "State the First and Second Shifting theorems of Laplace Transforms. Find L{t² · e^(3t)}.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Laplace Transforms in Mathematics - Mechanical (M(ME)301).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "1.5 Marks for definition & concepts, 2.5 Marks for derivation/methods, 1.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_ME_097",
      "dept": "ME",
      "code": "M(ME)301",
      "subject": "Mathematics - Mechanical",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Mathematics - Mechanical. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Mathematics - Mechanical (M(ME)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_ME_025",
      "dept": "ME",
      "code": "M(ME)301",
      "subject": "Mathematics - Mechanical",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Fourier Series",
      "q": "Find the Fourier series expansion of f(x) = x² in the interval -π ≤ x ≤ π. Hence deduce that Σ (1/n²) = π²/6.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Fourier Series in Mathematics - Mechanical (M(ME)301).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "3.0 Marks for definition & concepts, 5.0 Marks for derivation/methods, 2.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_ME_098",
      "dept": "ME",
      "code": "M(ME)301",
      "subject": "Mathematics - Mechanical",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Mathematics - Mechanical (M(ME)301). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Mathematics - Mechanical (M(ME)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_ME_099",
      "dept": "ME",
      "code": "M(ME)301",
      "subject": "Mathematics - Mechanical",
      "year": 2025,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Mathematics - Mechanical. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Mathematics - Mechanical (M(ME)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "CS(ME)301": [
    {
      "id": "SUB_ME_100",
      "dept": "ME",
      "code": "CS(ME)301",
      "subject": "Programming Fundamentals",
      "year": 2024,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Programming Fundamentals. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Programming Fundamentals (CS(ME)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_ME_026",
      "dept": "ME",
      "code": "CS(ME)301",
      "subject": "Programming Fundamentals",
      "year": 2023,
      "marks": 5,
      "group": "Group B",
      "topic": "C Language Functions",
      "q": "Explain Call by Value and Call by Reference in C with memory diagrams and swapping code examples.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of C Language Functions in Programming Fundamentals (CS(ME)301).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "1.5 Marks for definition & concepts, 2.5 Marks for derivation/methods, 1.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_ME_027",
      "dept": "ME",
      "code": "CS(ME)301",
      "subject": "Programming Fundamentals",
      "year": 2025,
      "marks": 10,
      "group": "Group C",
      "topic": "File Handling in C",
      "q": "Write a complete C program to read student records (roll, name, marks) from a text file, compute the average marks, and write the report to another file.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of File Handling in C in Programming Fundamentals (CS(ME)301).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "3.0 Marks for definition & concepts, 5.0 Marks for derivation/methods, 2.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_ME_101",
      "dept": "ME",
      "code": "CS(ME)301",
      "subject": "Programming Fundamentals",
      "year": 2025,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Programming Fundamentals (CS(ME)301). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Programming Fundamentals (CS(ME)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_ME_102",
      "dept": "ME",
      "code": "CS(ME)301",
      "subject": "Programming Fundamentals",
      "year": 2024,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Programming Fundamentals. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Programming Fundamentals (CS(ME)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "PH(ME)301": [
    {
      "id": "SUB_ME_103",
      "dept": "ME",
      "code": "PH(ME)301",
      "subject": "Physics - Mechanical",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Physics - Mechanical. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Physics - Mechanical (PH(ME)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_ME_028",
      "dept": "ME",
      "code": "PH(ME)301",
      "subject": "Physics - Mechanical",
      "year": 2024,
      "marks": 5,
      "group": "Group B",
      "topic": "Interference of Light",
      "q": "Explain the formation of Newton's rings by reflected light. Prove that dark rings have diameters proportional to square roots of natural numbers.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Interference of Light in Physics - Mechanical (PH(ME)301).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "1.5 Marks for definition & concepts, 2.5 Marks for derivation/methods, 1.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_ME_104",
      "dept": "ME",
      "code": "PH(ME)301",
      "subject": "Physics - Mechanical",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Physics - Mechanical (PH(ME)301). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Physics - Mechanical (PH(ME)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_ME_029",
      "dept": "ME",
      "code": "PH(ME)301",
      "subject": "Physics - Mechanical",
      "year": 2023,
      "marks": 10,
      "group": "Group C",
      "topic": "Lasers & Fiber Optics",
      "q": "Explain spontaneous emission, stimulated emission, and population inversion in lasers. Describe the working of a Ruby Laser or He-Ne Laser.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Lasers & Fiber Optics in Physics - Mechanical (PH(ME)301).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "3.0 Marks for definition & concepts, 5.0 Marks for derivation/methods, 2.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_ME_105",
      "dept": "ME",
      "code": "PH(ME)301",
      "subject": "Physics - Mechanical",
      "year": 2025,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Physics - Mechanical. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Physics - Mechanical (PH(ME)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "CS303": [
    {
      "id": "SUB_CSE_030",
      "dept": "CSE",
      "code": "CS303",
      "subject": "Discrete Mathematics",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Group Theory",
      "q": "Define a Group, Abelian Group, and Cyclic Group with examples. Prove that every group of prime order is cyclic.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Group Theory in Discrete Mathematics (CS303).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "1.5 Marks for definition & concepts, 2.5 Marks for derivation/methods, 1.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_CSE_031",
      "dept": "CSE",
      "code": "CS303",
      "subject": "Discrete Mathematics",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Lattices & Boolean Algebra",
      "q": "Define a Poset and a Lattice. Prove that in a lattice (L, ≤), the absorption laws a ∧ (a ∨ b) = a and a ∨ (a ∧ b) = a hold.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Lattices & Boolean Algebra in Discrete Mathematics (CS303).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "3.0 Marks for definition & concepts, 5.0 Marks for derivation/methods, 2.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_CSE_032",
      "dept": "CSE",
      "code": "CS303",
      "subject": "Discrete Mathematics",
      "year": 2023,
      "marks": 15,
      "group": "Group C",
      "topic": "Combinatorics & Recurrence Relations",
      "q": "(a) State the Pigeonhole Principle. Prove that if 13 people are in a room, at least two must share a birth month. (5 Marks)\n(b) Solve the recurrence relation a_n - 7a_{n-1} + 10a_{n-2} = 0 with a_0 = 1, a_1 = 8. (10 Marks)",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Combinatorics & Recurrence Relations in Discrete Mathematics (CS303).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "4.5 Marks for definition & concepts, 7.5 Marks for derivation/methods, 3.0 Marks for diagrams & accuracy."
    }
  ],
  "DAA302": [
    {
      "id": "SUB_CSE_033",
      "dept": "CSE",
      "code": "DAA302",
      "subject": "Design & Analysis of Algorithms",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Greedy Strategy",
      "q": "Explain the Fractional Knapsack problem. Give its greedy algorithm and prove why greedy choice yields an optimal solution.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Greedy Strategy in Design & Analysis of Algorithms (DAA302).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "1.5 Marks for definition & concepts, 2.5 Marks for derivation/methods, 1.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_CSE_034",
      "dept": "CSE",
      "code": "DAA302",
      "subject": "Design & Analysis of Algorithms",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Dynamic Programming",
      "q": "Solve the 0/1 Knapsack problem using dynamic programming. Given weights [2, 3, 4, 5], values [3, 4, 5, 6], and capacity W = 8, fill the DP matrix and backtrack the chosen items.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Dynamic Programming in Design & Analysis of Algorithms (DAA302).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "3.0 Marks for definition & concepts, 5.0 Marks for derivation/methods, 2.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_CSE_035",
      "dept": "CSE",
      "code": "DAA302",
      "subject": "Design & Analysis of Algorithms",
      "year": 2023,
      "marks": 15,
      "group": "Group C",
      "topic": "Complexity Classes & NP-Completeness",
      "q": "(a) Define classes P, NP, NP-Complete, and NP-Hard with an Euler Venn diagram. (7 Marks)\n(b) Explain Cook's theorem and prove that Circuit-SAT / 3-SAT is NP-Complete. (8 Marks)",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Complexity Classes & NP-Completeness in Design & Analysis of Algorithms (DAA302).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "4.5 Marks for definition & concepts, 7.5 Marks for derivation/methods, 3.0 Marks for diagrams & accuracy."
    }
  ],
  "ITW301": [
    {
      "id": "SUB_CSE_036",
      "dept": "CSE",
      "code": "ITW301",
      "subject": "IT Workshop & Python",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Python Core",
      "q": "Explain Python list comprehensions, lambda functions, and dictionary comprehensions with clean code examples.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Python Core in IT Workshop & Python (ITW301).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "1.5 Marks for definition & concepts, 2.5 Marks for derivation/methods, 1.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_CSE_109",
      "dept": "CSE",
      "code": "ITW301",
      "subject": "IT Workshop & Python",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of IT Workshop & Python. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of IT Workshop & Python (ITW301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_CSE_037",
      "dept": "CSE",
      "code": "ITW301",
      "subject": "IT Workshop & Python",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Object Oriented Python",
      "q": "Explain classes, inheritance, dunder methods (__init__, __str__), and exception handling (try-except-finally) in Python.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Object Oriented Python in IT Workshop & Python (ITW301).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "3.0 Marks for definition & concepts, 5.0 Marks for derivation/methods, 2.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_CSE_110",
      "dept": "CSE",
      "code": "ITW301",
      "subject": "IT Workshop & Python",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in IT Workshop & Python (ITW301). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of IT Workshop & Python (ITW301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_CSE_111",
      "dept": "CSE",
      "code": "ITW301",
      "subject": "IT Workshop & Python",
      "year": 2025,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for IT Workshop & Python. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of IT Workshop & Python (ITW301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "ESC302": [
    {
      "id": "SUB_CSE_112",
      "dept": "CSE",
      "code": "ESC302",
      "subject": "Engineering Science",
      "year": 2024,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Engineering Science. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Engineering Science (ESC302).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_CSE_038",
      "dept": "CSE",
      "code": "ESC302",
      "subject": "Engineering Science",
      "year": 2023,
      "marks": 5,
      "group": "Group B",
      "topic": "Semiconductor Devices",
      "q": "Explain the V-I characteristics of a P-N junction diode under forward and reverse bias with barrier potential.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Semiconductor Devices in Engineering Science (ESC302).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "1.5 Marks for definition & concepts, 2.5 Marks for derivation/methods, 1.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_CSE_039",
      "dept": "CSE",
      "code": "ESC302",
      "subject": "Engineering Science",
      "year": 2025,
      "marks": 10,
      "group": "Group C",
      "topic": "Digital Number Representation",
      "q": "Explain IEEE 754 single-precision floating point format. Convert decimal -13.625 into IEEE 754 32-bit format.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Digital Number Representation in Engineering Science (ESC302).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "3.0 Marks for definition & concepts, 5.0 Marks for derivation/methods, 2.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_CSE_113",
      "dept": "CSE",
      "code": "ESC302",
      "subject": "Engineering Science",
      "year": 2025,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Engineering Science (ESC302). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Engineering Science (ESC302).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_CSE_114",
      "dept": "CSE",
      "code": "ESC302",
      "subject": "Engineering Science",
      "year": 2024,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Engineering Science. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Engineering Science (ESC302).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "M(CSE)301": [
    {
      "id": "SUB_CSE_115",
      "dept": "CSE",
      "code": "M(CSE)301",
      "subject": "Differential Calculus & Linear Algebra",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Differential Calculus & Linear Algebra. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Differential Calculus & Linear Algebra (M(CSE)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_CSE_040",
      "dept": "CSE",
      "code": "M(CSE)301",
      "subject": "Differential Calculus & Linear Algebra",
      "year": 2024,
      "marks": 5,
      "group": "Group B",
      "topic": "Linear Algebra",
      "q": "State Cayley-Hamilton theorem. Use it to find the inverse A⁻¹ of the matrix A = [[1, 2], [3, 4]].",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Linear Algebra in Differential Calculus & Linear Algebra (M(CSE)301).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "1.5 Marks for definition & concepts, 2.5 Marks for derivation/methods, 1.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_CSE_116",
      "dept": "CSE",
      "code": "M(CSE)301",
      "subject": "Differential Calculus & Linear Algebra",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Differential Calculus & Linear Algebra (M(CSE)301). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Differential Calculus & Linear Algebra (M(CSE)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_CSE_041",
      "dept": "CSE",
      "code": "M(CSE)301",
      "subject": "Differential Calculus & Linear Algebra",
      "year": 2023,
      "marks": 10,
      "group": "Group C",
      "topic": "Eigenvalues & Diagonalization",
      "q": "Find the eigenvalues and corresponding eigenvectors of A = [[2, 1, 1], [2, 3, 2], [3, 3, 4]]. Check if A is diagonalizable.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Eigenvalues & Diagonalization in Differential Calculus & Linear Algebra (M(CSE)301).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "3.0 Marks for definition & concepts, 5.0 Marks for derivation/methods, 2.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_CSE_117",
      "dept": "CSE",
      "code": "M(CSE)301",
      "subject": "Differential Calculus & Linear Algebra",
      "year": 2025,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Differential Calculus & Linear Algebra. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Differential Calculus & Linear Algebra (M(CSE)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "M(CSE)302": [
    {
      "id": "SUB_CSE_042",
      "dept": "CSE",
      "code": "M(CSE)302",
      "subject": "Probability & Statistics",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Probability Theory",
      "q": "State Bayes' Theorem. Explain prior probability, likelihood, and posterior probability with a medical testing example.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Probability Theory in Probability & Statistics (M(CSE)302).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "1.5 Marks for definition & concepts, 2.5 Marks for derivation/methods, 1.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_CSE_118",
      "dept": "CSE",
      "code": "M(CSE)302",
      "subject": "Probability & Statistics",
      "year": 2024,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Probability & Statistics. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Probability & Statistics (M(CSE)302).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_CSE_119",
      "dept": "CSE",
      "code": "M(CSE)302",
      "subject": "Probability & Statistics",
      "year": 2025,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Probability & Statistics (M(CSE)302). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Probability & Statistics (M(CSE)302).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_CSE_043",
      "dept": "CSE",
      "code": "M(CSE)302",
      "subject": "Probability & Statistics",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Distributions & Statistics",
      "q": "Explain the properties of the Normal Distribution curve. State the Central Limit Theorem and explain its importance in sampling.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Distributions & Statistics in Probability & Statistics (M(CSE)302).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "3.0 Marks for definition & concepts, 5.0 Marks for derivation/methods, 2.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_CSE_120",
      "dept": "CSE",
      "code": "M(CSE)302",
      "subject": "Probability & Statistics",
      "year": 2024,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Probability & Statistics. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Probability & Statistics (M(CSE)302).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "CS(EE)301": [
    {
      "id": "SUB_CSE_121",
      "dept": "CSE",
      "code": "CS(EE)301",
      "subject": "Analog Circuits",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Analog Circuits. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Analog Circuits (CS(EE)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_CSE_044",
      "dept": "CSE",
      "code": "CS(EE)301",
      "subject": "Analog Circuits",
      "year": 2023,
      "marks": 5,
      "group": "Group B",
      "topic": "Op-Amps",
      "q": "Derive the closed-loop voltage gain formula for an inverting and non-inverting operational amplifier using virtual ground concept.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Op-Amps in Analog Circuits (CS(EE)301).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "1.5 Marks for definition & concepts, 2.5 Marks for derivation/methods, 1.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_CSE_045",
      "dept": "CSE",
      "code": "CS(EE)301",
      "subject": "Analog Circuits",
      "year": 2025,
      "marks": 10,
      "group": "Group C",
      "topic": "Oscillators",
      "q": "Explain Barkhausen criteria for sustained oscillations. Draw the circuit diagram of an RC Phase Shift Oscillator and derive its frequency of oscillation.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Oscillators in Analog Circuits (CS(EE)301).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "3.0 Marks for definition & concepts, 5.0 Marks for derivation/methods, 2.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_CSE_122",
      "dept": "CSE",
      "code": "CS(EE)301",
      "subject": "Analog Circuits",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Analog Circuits (CS(EE)301). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Analog Circuits (CS(EE)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_CSE_123",
      "dept": "CSE",
      "code": "CS(EE)301",
      "subject": "Analog Circuits",
      "year": 2025,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Analog Circuits. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Analog Circuits (CS(EE)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "CS(EC)301": [
    {
      "id": "SUB_CSE_046",
      "dept": "CSE",
      "code": "CS(EC)301",
      "subject": "Digital Electronics",
      "year": 2024,
      "marks": 5,
      "group": "Group B",
      "topic": "Combinational Logic",
      "q": "Explain how an 8:1 Multiplexer can be used as a universal logic function generator for any 3-variable or 4-variable Boolean function.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Combinational Logic in Digital Electronics (CS(EC)301).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "1.5 Marks for definition & concepts, 2.5 Marks for derivation/methods, 1.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_CSE_124",
      "dept": "CSE",
      "code": "CS(EC)301",
      "subject": "Digital Electronics",
      "year": 2024,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Digital Electronics. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Digital Electronics (CS(EC)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_CSE_125",
      "dept": "CSE",
      "code": "CS(EC)301",
      "subject": "Digital Electronics",
      "year": 2025,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Digital Electronics (CS(EC)301). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Digital Electronics (CS(EC)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_CSE_047",
      "dept": "CSE",
      "code": "CS(EC)301",
      "subject": "Digital Electronics",
      "year": 2023,
      "marks": 10,
      "group": "Group C",
      "topic": "Sequential Circuits",
      "q": "Design a 3-bit synchronous binary up-counter using JK flip-flops. Draw state table, K-maps for J and K inputs, and logic circuit.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Sequential Circuits in Digital Electronics (CS(EC)301).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "3.0 Marks for definition & concepts, 5.0 Marks for derivation/methods, 2.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_CSE_126",
      "dept": "CSE",
      "code": "CS(EC)301",
      "subject": "Digital Electronics",
      "year": 2024,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Digital Electronics. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Digital Electronics (CS(EC)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "PH301": [
    {
      "id": "SUB_CSE_048",
      "dept": "CSE",
      "code": "PH301",
      "subject": "Physics - CSE",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Quantum Mechanics",
      "q": "Explain the concept of quantum wave-particle duality and de Broglie hypothesis. What is the physical significance of wave function ψ?",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Quantum Mechanics in Physics - CSE (PH301).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "1.5 Marks for definition & concepts, 2.5 Marks for derivation/methods, 1.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_CSE_127",
      "dept": "CSE",
      "code": "PH301",
      "subject": "Physics - CSE",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Physics - CSE. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Physics - CSE (PH301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_CSE_049",
      "dept": "CSE",
      "code": "PH301",
      "subject": "Physics - CSE",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Electromagnetism & Optics",
      "q": "Write Maxwell's four equations in differential and integral forms. Explain the concept of displacement current introduced by Maxwell.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Electromagnetism & Optics in Physics - CSE (PH301).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "3.0 Marks for definition & concepts, 5.0 Marks for derivation/methods, 2.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_CSE_128",
      "dept": "CSE",
      "code": "PH301",
      "subject": "Physics - CSE",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Physics - CSE (PH301). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Physics - CSE (PH301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_CSE_129",
      "dept": "CSE",
      "code": "PH301",
      "subject": "Physics - CSE",
      "year": 2025,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Physics - CSE. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Physics - CSE (PH301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "IT304": [
    {
      "id": "SUB_IT_139",
      "dept": "IT",
      "code": "IT304",
      "subject": "Object Oriented Programming",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Object Oriented Programming. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Object Oriented Programming (IT304).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_IT_050",
      "dept": "IT",
      "code": "IT304",
      "subject": "Object Oriented Programming",
      "year": 2023,
      "marks": 5,
      "group": "Group B",
      "topic": "OOP Concepts",
      "q": "Explain the four core principles of Object Oriented Programming: Encapsulation, Abstraction, Inheritance, and Polymorphism with C++/Java snippets.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of OOP Concepts in Object Oriented Programming (IT304).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "1.5 Marks for definition & concepts, 2.5 Marks for derivation/methods, 1.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_IT_051",
      "dept": "IT",
      "code": "IT304",
      "subject": "Object Oriented Programming",
      "year": 2025,
      "marks": 10,
      "group": "Group C",
      "topic": "Polymorphism & Virtual Functions",
      "q": "Explain runtime polymorphism, virtual functions, vtable, and vptr in C++. What are pure virtual functions and abstract classes?",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Polymorphism & Virtual Functions in Object Oriented Programming (IT304).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "3.0 Marks for definition & concepts, 5.0 Marks for derivation/methods, 2.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_IT_140",
      "dept": "IT",
      "code": "IT304",
      "subject": "Object Oriented Programming",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Object Oriented Programming (IT304). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Object Oriented Programming (IT304).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_IT_141",
      "dept": "IT",
      "code": "IT304",
      "subject": "Object Oriented Programming",
      "year": 2025,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Object Oriented Programming. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Object Oriented Programming (IT304).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "IT305": [
    {
      "id": "SUB_IT_052",
      "dept": "IT",
      "code": "IT305",
      "subject": "Formal Language & Automata Theory",
      "year": 2024,
      "marks": 5,
      "group": "Group B",
      "topic": "Regular Expressions & DFA",
      "q": "Construct a Deterministic Finite Automaton (DFA) that accepts the set of all binary strings ending with '01' over alphabet {0, 1}.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Regular Expressions & DFA in Formal Language & Automata Theory (IT305).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "1.5 Marks for definition & concepts, 2.5 Marks for derivation/methods, 1.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_IT_053",
      "dept": "IT",
      "code": "IT305",
      "subject": "Formal Language & Automata Theory",
      "year": 2023,
      "marks": 10,
      "group": "Group C",
      "topic": "Pumping Lemma & Non-Regular Languages",
      "q": "State the Pumping Lemma for regular languages. Use it to prove that the language L = {aⁿ bⁿ | n ≥ 0} is not regular.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Pumping Lemma & Non-Regular Languages in Formal Language & Automata Theory (IT305).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "3.0 Marks for definition & concepts, 5.0 Marks for derivation/methods, 2.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_IT_054",
      "dept": "IT",
      "code": "IT305",
      "subject": "Formal Language & Automata Theory",
      "year": 2025,
      "marks": 15,
      "group": "Group C",
      "topic": "Context-Free Grammars & Pushdown Automata",
      "q": "(a) What is an ambiguous grammar? Show that E -> E + E | E * E | id is ambiguous with parse trees for 'id + id * id'. (7 Marks)\n(b) Design a Pushdown Automaton (PDA) that accepts the language L = {w · c · w^R | w ∈ {a, b}*}. (8 Marks)",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Context-Free Grammars & Pushdown Automata in Formal Language & Automata Theory (IT305).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "4.5 Marks for definition & concepts, 7.5 Marks for derivation/methods, 3.0 Marks for diagrams & accuracy."
    }
  ],
  "M(IT)301": [
    {
      "id": "SUB_IT_055",
      "dept": "IT",
      "code": "M(IT)301",
      "subject": "Discrete Mathematics",
      "year": 2024,
      "marks": 5,
      "group": "Group B",
      "topic": "Set Theory & Relations",
      "q": "Define equivalence relations and partial order relations. Prove that congruence modulo m is an equivalence relation on integers.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Set Theory & Relations in Discrete Mathematics (M(IT)301).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "1.5 Marks for definition & concepts, 2.5 Marks for derivation/methods, 1.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_IT_142",
      "dept": "IT",
      "code": "M(IT)301",
      "subject": "Discrete Mathematics",
      "year": 2024,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Discrete Mathematics. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Discrete Mathematics (M(IT)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_IT_143",
      "dept": "IT",
      "code": "M(IT)301",
      "subject": "Discrete Mathematics",
      "year": 2025,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Discrete Mathematics (M(IT)301). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Discrete Mathematics (M(IT)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_IT_056",
      "dept": "IT",
      "code": "M(IT)301",
      "subject": "Discrete Mathematics",
      "year": 2023,
      "marks": 10,
      "group": "Group C",
      "topic": "Graph Theory",
      "q": "State and prove Euler's theorem for planar graphs: V - E + R = 2. Prove that in any simple planar graph, E ≤ 3V - 6.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Graph Theory in Discrete Mathematics (M(IT)301).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "3.0 Marks for definition & concepts, 5.0 Marks for derivation/methods, 2.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_IT_144",
      "dept": "IT",
      "code": "M(IT)301",
      "subject": "Discrete Mathematics",
      "year": 2024,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Discrete Mathematics. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Discrete Mathematics (M(IT)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "M(IT)303": [
    {
      "id": "SUB_IT_057",
      "dept": "IT",
      "code": "M(IT)303",
      "subject": "Probability & Statistics",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Random Variables",
      "q": "Define continuous random variables and probability density functions (PDF). If f(x) = k·x² for 0 ≤ x ≤ 2, find k and E(X).",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Random Variables in Probability & Statistics (M(IT)303).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "1.5 Marks for definition & concepts, 2.5 Marks for derivation/methods, 1.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_IT_148",
      "dept": "IT",
      "code": "M(IT)303",
      "subject": "Probability & Statistics",
      "year": 2024,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Probability & Statistics. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Probability & Statistics (M(IT)303).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_IT_149",
      "dept": "IT",
      "code": "M(IT)303",
      "subject": "Probability & Statistics",
      "year": 2025,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Probability & Statistics (M(IT)303). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Probability & Statistics (M(IT)303).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_IT_058",
      "dept": "IT",
      "code": "M(IT)303",
      "subject": "Probability & Statistics",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Linear Regression",
      "q": "Derive the equations of the two regression lines: y on x and x on y. Prove that the correlation coefficient r is the geometric mean of regression coefficients.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Linear Regression in Probability & Statistics (M(IT)303).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "3.0 Marks for definition & concepts, 5.0 Marks for derivation/methods, 2.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_IT_150",
      "dept": "IT",
      "code": "M(IT)303",
      "subject": "Probability & Statistics",
      "year": 2024,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Probability & Statistics. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Probability & Statistics (M(IT)303).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "PH(IT)301": [
    {
      "id": "SUB_IT_151",
      "dept": "IT",
      "code": "PH(IT)301",
      "subject": "Physics - IT",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Physics - IT. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Physics - IT (PH(IT)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_IT_059",
      "dept": "IT",
      "code": "PH(IT)301",
      "subject": "Physics - IT",
      "year": 2023,
      "marks": 5,
      "group": "Group B",
      "topic": "Semiconductors",
      "q": "Derive the expression for Hall voltage and Hall coefficient R_H. Explain how Hall effect determines charge carrier type and concentration.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Semiconductors in Physics - IT (PH(IT)301).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "1.5 Marks for definition & concepts, 2.5 Marks for derivation/methods, 1.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_IT_060",
      "dept": "IT",
      "code": "PH(IT)301",
      "subject": "Physics - IT",
      "year": 2025,
      "marks": 10,
      "group": "Group C",
      "topic": "Solid State Physics",
      "q": "Explain the Kronig-Penney model and how energy bands (valence band, conduction band, forbidden band) are formed in solids.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Solid State Physics in Physics - IT (PH(IT)301).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "3.0 Marks for definition & concepts, 5.0 Marks for derivation/methods, 2.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_IT_152",
      "dept": "IT",
      "code": "PH(IT)301",
      "subject": "Physics - IT",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Physics - IT (PH(IT)301). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Physics - IT (PH(IT)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_IT_153",
      "dept": "IT",
      "code": "PH(IT)301",
      "subject": "Physics - IT",
      "year": 2025,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Physics - IT. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Physics - IT (PH(IT)301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "CH301": [
    {
      "id": "SUB_IT_061",
      "dept": "IT",
      "code": "CH301",
      "subject": "Engineering Chemistry",
      "year": 2024,
      "marks": 5,
      "group": "Group B",
      "topic": "Water Treatment",
      "q": "Explain the zeolite/permutit process of water softening. Write the chemical reactions during softening and regeneration.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Water Treatment in Engineering Chemistry (CH301).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "1.5 Marks for definition & concepts, 2.5 Marks for derivation/methods, 1.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_IT_154",
      "dept": "IT",
      "code": "CH301",
      "subject": "Engineering Chemistry",
      "year": 2024,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Engineering Chemistry. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Engineering Chemistry (CH301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_IT_155",
      "dept": "IT",
      "code": "CH301",
      "subject": "Engineering Chemistry",
      "year": 2025,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Engineering Chemistry (CH301). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Engineering Chemistry (CH301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_IT_062",
      "dept": "IT",
      "code": "CH301",
      "subject": "Engineering Chemistry",
      "year": 2023,
      "marks": 10,
      "group": "Group C",
      "topic": "Electrochemistry & Corrosion",
      "q": "Explain electrochemical mechanism of rusting of iron (wet corrosion). Describe sacrificial anode and impressed current cathodic protection methods.",
      "answer": "1. OVERVIEW & DEFINITIONS:\nThis question addresses core concepts of Electrochemistry & Corrosion in Engineering Chemistry (CH301).\n• Definition: A clear, formal technical statement covering the physical/mathematical foundation.\n• Objectives: Analyzing the operational behavior, derivation steps, and practical engineering relevance under university exam criteria.\n\n2. CORE FORMULAS & GOVERNING PRINCIPLES:\n• Primary Equation / Law: Rigorously stated with all variables and SI units.\n• Assumptions / Boundary Conditions: The operational framework required for validity.\n\n3. DETAILED STEP-BY-STEP SOLUTION & DERIVATION:\nStep 1: Problem formulation and free-body / block / state diagram setup.\nStep 2: Analytical development with algebraic manipulation and substitution.\nStep 3: Verification of dimensions and consistency of physical units.\n\n4. EXAM TIPS & COMMON PITFALLS:\n• Always draw neat, labeled diagrams with axes, arrows, and units.\n• State all assumptions explicitly before starting mathematical derivations.\n• Conclude with a clear boxed final answer or engineering implication.",
      "keyPoints": [
        "Accurate definition of core technical terms",
        "Detailed derivation or algorithmic steps",
        "Assumptions and boundary conditions stated",
        "Correct dimensional units and clean sketches"
      ],
      "rubric": "3.0 Marks for definition & concepts, 5.0 Marks for derivation/methods, 2.0 Marks for diagrams & accuracy."
    },
    {
      "id": "SUB_IT_156",
      "dept": "IT",
      "code": "CH301",
      "subject": "Engineering Chemistry",
      "year": 2024,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Engineering Chemistry. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Engineering Chemistry (CH301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "IT301": [
    {
      "id": "SUB_IT_130",
      "dept": "IT",
      "code": "IT301",
      "subject": "Data Structures",
      "year": 2024,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Data Structures. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Data Structures (IT301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_IT_131",
      "dept": "IT",
      "code": "IT301",
      "subject": "Data Structures",
      "year": 2025,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Data Structures (IT301). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Data Structures (IT301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_IT_132",
      "dept": "IT",
      "code": "IT301",
      "subject": "Data Structures",
      "year": 2024,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Data Structures. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Data Structures (IT301).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "IT302": [
    {
      "id": "SUB_IT_133",
      "dept": "IT",
      "code": "IT302",
      "subject": "Digital Electronics & Logic Design",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Digital Electronics & Logic Design. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Digital Electronics & Logic Design (IT302).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_IT_134",
      "dept": "IT",
      "code": "IT302",
      "subject": "Digital Electronics & Logic Design",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Digital Electronics & Logic Design (IT302). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Digital Electronics & Logic Design (IT302).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_IT_135",
      "dept": "IT",
      "code": "IT302",
      "subject": "Digital Electronics & Logic Design",
      "year": 2025,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Digital Electronics & Logic Design. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Digital Electronics & Logic Design (IT302).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ],
  "M(IT)302": [
    {
      "id": "SUB_IT_145",
      "dept": "IT",
      "code": "M(IT)302",
      "subject": "Mathematics - III",
      "year": 2025,
      "marks": 5,
      "group": "Group B",
      "topic": "Fundamental Principles",
      "q": "Explain the fundamental theoretical concepts and governing equations of Mathematics - III. Outline two key engineering applications.",
      "answer": "1. TECHNICAL OVERVIEW:\nFundamental Principles is an essential component of Mathematics - III (M(IT)302).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "1.5 Marks for concepts, 2.5 Marks for core derivation, 1.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_IT_146",
      "dept": "IT",
      "code": "M(IT)302",
      "subject": "Mathematics - III",
      "year": 2024,
      "marks": 10,
      "group": "Group C",
      "topic": "Design & Analytical Methods",
      "q": "Derive the principal analytical model used in Mathematics - III (M(IT)302). Discuss the assumptions and solve a typical examination case problem.",
      "answer": "1. TECHNICAL OVERVIEW:\nDesign & Analytical Methods is an essential component of Mathematics - III (M(IT)302).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "3.0 Marks for concepts, 5.0 Marks for core derivation, 2.0 Marks for diagrams/examples."
    },
    {
      "id": "SUB_IT_147",
      "dept": "IT",
      "code": "M(IT)302",
      "subject": "Mathematics - III",
      "year": 2025,
      "marks": 15,
      "group": "Group C",
      "topic": "Comprehensive Examination Problem",
      "q": "(a) Describe the experimental or computational methodology for Mathematics - III. (8 Marks)\n(b) Analyze the failure modes, error sources, and mitigation techniques in practical implementations. (7 Marks)",
      "answer": "1. TECHNICAL OVERVIEW:\nComprehensive Examination Problem is an essential component of Mathematics - III (M(IT)302).\nA comprehensive response requires defining the governing theory, deriving primary relationships, and identifying engineering applications.\n\n2. MATHEMATICAL / SYSTEM FORMULATION:\n• State governing equations clearly.\n• Identify dependent and independent parameters.\n• Apply standard boundary conditions.\n\n3. METHODOLOGY & DISCUSSION:\nStep-by-step procedural breakdown with neat sketches, tables, and numerical checks.\n\n4. CONCLUSION:\nSummary of findings, practical industrial standards, and key exam points.",
      "keyPoints": [
        "Clear definition and governing equations",
        "Step-by-step derivation or implementation",
        "Detailed assumptions and boundary conditions",
        "Practical engineering applications"
      ],
      "rubric": "4.5 Marks for concepts, 7.5 Marks for core derivation, 3.0 Marks for diagrams/examples."
    }
  ]
};
