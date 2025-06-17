import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible.jsx'
import { 
  BookOpen, 
  Users, 
  Calendar, 
  Bell, 
  GraduationCap, 
  Target, 
  CheckCircle, 
  Clock, 
  Code, 
  Database, 
  Globe,
  GitBranch,
  Zap,
  Shield,
  BarChart3,
  FileText,
  Presentation,
  Download,
  ChevronDown,
  ChevronRight
} from 'lucide-react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('overview')
  const [expandedUserStory, setExpandedUserStory] = useState(null)
  const [animationKey, setAnimationKey] = useState(0)
  const [isTabChanging, setIsTabChanging] = useState(false)

  const handleTabChange = (newTab) => {
    if (newTab !== activeTab) {
      setIsTabChanging(true)
      
      // Scroll la începutul paginii
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      
      // Delay pentru a crea efect de tranziție
      setTimeout(() => {
        setActiveTab(newTab)
        setAnimationKey(prev => prev + 1) // Forțează re-animarea
        setIsTabChanging(false)
      }, 150)
    }
  }

  const handleDownloadDocumentation = () => {
    // Pentru documentul tău existent - trebuie să pui fișierul în public/
    const link = document.createElement('a')
    link.href = '/documentatia.docx' // sau .docx, .txt
    link.download = 'Proiect Individual.docx'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const userStories = [
    { 
      id: 'US1', 
      title: 'Autentificare student', 
      points: 3, 
      status: 'done',
      category: '🧑‍🎓 Gestionarea Utilizatorilor',
      details: {
        description: 'Ca student, vreau să mă pot autentifica în sistem folosind email și parolă pentru a accesa informațiile mele academice.',
        acceptanceCriteria: [
          'Formular de login cu câmpuri pentru email și parolă',
          'Validare client-side pentru format email și lungime parolă',
          'Autentificare securizată prin API cu JWT tokens',
          'Sesiune persistentă cu expirare controlată',
          'Mesaje de eroare clare pentru credențiale greșite',
          'Redirecționare automată după autentificare reușită'
        ],
        priority: 'High',
        assignee: 'Frontend + Backend',
        effort: '3 Story Points'
      }
    },
    { 
      id: 'US2', 
      title: 'Înregistrare utilizatori', 
      points: 5, 
      status: 'done',
      category: '🧑‍🎓 Gestionarea Utilizatorilor',
      details: {
        description: 'Ca personal administrativ, vreau să pot înregistra noi utilizatori (studenți, profesori) în sistem pentru a le gestiona accesul.',
        acceptanceCriteria: [
          'Interfață pentru înregistrarea utilizatorilor noi',
          'Câmpuri pentru date personale (nume, email, rol)',
          'Validare unicitate email în baza de date',
          'Generare automată parolă temporară',
          'Trimitere email cu credențiale de access',
          'Setare roluri și permisiuni specifice (student/profesor)'
        ],
        priority: 'High',
        assignee: 'Frontend + Backend',
        effort: '5 Story Points'
      }
    },
    { 
      id: 'US3', 
      title: 'Gestionare profil utilizator', 
      points: 3, 
      status: 'done',
      category: '🧑‍🎓 Gestionarea Utilizatorilor',
      details: {
        description: 'Ca utilizator, vreau să-mi pot gestiona profilul personal (ex: schimbare parolă, actualizare date de contact) pentru a menține informațiile mele la zi.',
        acceptanceCriteria: [
          'Pagină profil cu informații utilizator editabile',
          'Funcționalitate schimbare parolă cu validări',
          'Actualizare date de contact (telefon, adresă)',
          'Upload imagine profil cu redimensionare automată',
          'Validare date modificate înainte de salvare',
          'Confirmare prin email pentru modificări sensibile'
        ],
        priority: 'Medium',
        assignee: 'Frontend + Backend',
        effort: '3 Story Points'
      }
    },
    { 
      id: 'US4', 
      title: 'Vizualizare orar student', 
      points: 3, 
      status: 'done',
      category: '📅 Gestionarea Orarelor',
      details: {
        description: 'Ca student, vreau să pot vizualiza orarul meu personalizat pentru a ști când și unde am cursuri, seminarii și examene.',
        acceptanceCriteria: [
          'Afișare orar în format săptămânal sau zilnic',
          'Informații complete pentru fiecare activitate (materie, profesor, sală)',
          'Filtrare pe tip activitate (curs, seminar, laborator)',
          'Navigare între săptămânile semestrului',
          'Export orar în format PDF sau iCal',
          'Notificări pentru modificări de orar'
        ],
        priority: 'High',
        assignee: 'Frontend + Backend',
        effort: '3 Story Points'
      }
    },
    { 
      id: 'US5', 
      title: 'Vizualizare orar profesor', 
      points: 3, 
      status: 'in-progress',
      category: '📅 Gestionarea Orarelor',
      details: {
        description: 'Ca profesor, vreau să pot vizualiza orarul cursurilor pe care le predau pentru a-mi organiza activitatea didactică.',
        acceptanceCriteria: [
          'Vizualizare completă orar pentru toate cursurile predate',
          'Informații detaliate despre grupe și săli',
          'Posibilitate de filtrare pe materie sau grupă',
          'Vedere lunară și săptămânală',
          'Indicatori pentru conflicte sau suprapuneri',
          'Export și sincronizare cu calendare externe'
        ],
        priority: 'Medium',
        assignee: 'Frontend + Backend',
        effort: '3 Story Points'
      }
    },
    { 
      id: 'US6', 
      title: 'Creare și modificare orare', 
      points: 5, 
      status: 'planned',
      category: '📅 Gestionarea Orarelor',
      details: {
        description: 'Ca personal administrativ, vreau să pot crea și modifica orare pentru cursuri, seminarii și laboratoare pentru a asigura o planificare eficientă.',
        acceptanceCriteria: [
          'Interfață drag-and-drop pentru crearea orarelor',
          'Validare automată conflicte de sală și profesor',
          'Alocare automată săli pe baza capacității',
          'Gestionare constrainte (disponibilitate profesor, restricții sală)',
          'Previzualizare și aprobare înainte de publicare',
          'Notificare automată utilizatori pentru modificări'
        ],
        priority: 'High',
        assignee: 'Frontend + Backend',
        effort: '5 Story Points'
      }
    },
    { 
      id: 'US7', 
      title: 'Trimitere notificări profesor → studenți', 
      points: 5, 
      status: 'planned',
      category: '🔔 Gestionarea Notificărilor',
      details: {
        description: 'Ca profesor, vreau să pot trimite notificări către studenții unui anumit curs pentru a comunica anunțuri importante.',
        acceptanceCriteria: [
          'Editor rich-text pentru compunerea mesajelor',
          'Selectare destinatari pe grupe sau cursuri',
          'Opțiuni de prioritate și urgență',
          'Programare trimitere pentru moment specific',
          'Confirmare citire de către studenți',
          'Istoric notificări trimise cu statistici'
        ],
        priority: 'High',
        assignee: 'Frontend + Backend',
        effort: '5 Story Points'
      }
    },
    { 
      id: 'US8', 
      title: 'Vizualizare notificări student', 
      points: 3, 
      status: 'planned',
      category: '🔔 Gestionarea Notificărilor',
      details: {
        description: 'Ca student, vreau să pot vizualiza notificările primite în cadrul sistemului pentru a fi la curent cu informațiile relevante.',
        acceptanceCriteria: [
          'Listă notificări sortate cronologic',
          'Indicatori pentru notificări necitite',
          'Filtrare pe materie, profesor sau tip',
          'Marcare ca citite/necitite',
          'Ștergere notificări vechi',
          'Notificări push în browser pentru mesaje urgente'
        ],
        priority: 'Medium',
        assignee: 'Frontend + Backend',
        effort: '3 Story Points'
      }
    },
    { 
      id: 'US9', 
      title: 'Notificări automate sistem', 
      points: 8, 
      status: 'planned',
      category: '🔔 Gestionarea Notificărilor',
      details: {
        description: 'Ca sistem, vreau să generez notificări automate pentru modificări de orar sau publicarea rezultatelor academice pentru a informa rapid utilizatorii.',
        acceptanceCriteria: [
          'Detectare automată modificări în sistem',
          'Template-uri personalizabile pentru diferite tipuri evenimente',
          'Reguli de trimitere bazate pe roluri și preferințe',
          'Sistem de queue pentru procesarea în masă',
          'Integrare cu email și SMS pentru notificări externe',
          'Dashboard de monitorizare și statistici'
        ],
        priority: 'Medium',
        assignee: 'Backend + DevOps',
        effort: '8 Story Points'
      }
    },
    { 
      id: 'US10', 
      title: 'Introducere note de către profesor', 
      points: 8, 
      status: 'planned',
      category: '📊 Gestionarea Rezultatelor Academice',
      details: {
        description: 'Ca profesor, vreau să pot introduce notele studenților pentru cursurile mele pentru a actualiza situația lor academică.',
        acceptanceCriteria: [
          'Interfață tabelară pentru introducerea notelor',
          'Validare note în intervalele permise',
          'Calcul automat medii pe parcurs și finale',
          'Comentarii și observații pentru fiecare notă',
          'Istoric modificări cu audit trail',
          'Backup automat și posibilitate de restaurare'
        ],
        priority: 'High',
        assignee: 'Frontend + Backend',
        effort: '8 Story Points'
      }
    },
    { 
      id: 'US11', 
      title: 'Vizualizare note student', 
      points: 5, 
      status: 'planned',
      category: '📊 Gestionarea Rezultatelor Academice',
      details: {
        description: 'Ca student, vreau să pot vizualiza istoricul complet al notelor mele pentru a-mi monitoriza progresul academic.',
        acceptanceCriteria: [
          'Dashboard cu toate notele pe semestre',
          'Grafice de evoluție și tendințe',
          'Calculul mediei generale și pe materii',
          'Comparație cu media grupei (opțional)',
          'Export rapoarte în format PDF',
          'Notificări pentru note noi publicate'
        ],
        priority: 'Medium',
        assignee: 'Frontend + Backend',
        effort: '5 Story Points'
      }
    },
    { 
      id: 'US12', 
      title: 'Evidență prezență studenți', 
      points: 5, 
      status: 'planned',
      category: '📊 Gestionarea Rezultatelor Academice',
      details: {
        description: 'Ca profesor, vreau să pot înregistra prezențele studenților la cursuri și seminarii pentru a ține evidența participării.',
        acceptanceCriteria: [
          'Interfață rapidă pentru marcarea prezenței',
          'Import liste studenți din grupele înscrise',
          'Marcarea absenței motivate/nemotivate',
          'Rapoarte de prezență pe semestru',
          'Notificări pentru studenți cu multe absențe',
          'Integrare cu sistemul de note pentru bonificații'
        ],
        priority: 'Medium',
        assignee: 'Frontend + Backend',
        effort: '5 Story Points'
      }
    },
    { 
      id: 'US13', 
      title: 'Creare cursuri și alocare profesori', 
      points: 5, 
      status: 'planned',
      category: '📚 Gestionarea cursurilor și grupelor',
      details: {
        description: 'Ca personal administrativ, vreau să pot crea noi cursuri și să aloc profesori la acestea pentru a organiza oferta educațională.',
        acceptanceCriteria: [
          'Formular complet pentru definirea cursurilor',
          'Alocare profesori pe baza specializării',
          'Setarea creditelor și orelor pentru fiecare curs',
          'Definirea prerequisitelor între cursuri',
          'Gestiunea capacității și resurselor necesare',
          'Aprobare și publicare în catalogul oficial'
        ],
        priority: 'High',
        assignee: 'Frontend + Backend',
        effort: '5 Story Points'
      }
    },
    { 
      id: 'US14', 
      title: 'Înscriere studenți la cursuri și grupare', 
      points: 8, 
      status: 'planned',
      category: '📚 Gestionarea cursurilor și grupelor',
      details: {
        description: 'Ca personal administrativ, vreau să pot înscrie studenți la cursuri și să-i organizez în grupe de studiu pentru o gestionare eficientă.',
        acceptanceCriteria: [
          'Sistem de înscriere cu validare prerequisite',
          'Algoritm de grupare automată sau manuală',
          'Gestionarea capacităților maxime per grupă',
          'Rezolvarea conflictelor de orar automat',
          'Interface pentru transferuri între grupe',
          'Raportare statistici înscrieri și ocupare'
        ],
        priority: 'High',
        assignee: 'Frontend + Backend',
        effort: '8 Story Points'
      }
    },
    { 
      id: 'US15', 
      title: 'Import masiv studenți', 
      points: 13, 
      status: 'planned',
      category: '📚 Gestionarea cursurilor și grupelor',
      details: {
        description: 'Ca personal administrativ, vreau să pot importa în masă studenți în sistem (ex: dintr-un fișier Excel) pentru a reduce munca manuală.',
        acceptanceCriteria: [
          'Parser pentru multiple formate (Excel, CSV, XML)',
          'Validare și curățare date în timpul importului',
          'Mapare automată câmpuri cu previzualizare',
          'Detectare și gestionare duplicate',
          'Raport detaliat cu succese și erori',
          'Rollback complet în caz de probleme majore',
          'Procesare în background pentru fișiere mari'
        ],
        priority: 'Medium',
        assignee: 'Backend + DevOps',
        effort: '13 Story Points'
      }
    }
  ]
    

  const sprints = [
    { 
      id: 1, 
      name: 'Sprint 1', 
      subtitle: 'Baze aplicație - Autentificare & Profil',
      period: '7–14 iunie 2025',
      points: 4, 
      status: 'completed',
      objective: 'Punerea bazelor aplicației – sistem de autentificare, înregistrare și gestionare profil, plus structură inițială pentru modulul de orar.',
      tasks: [
        { name: 'SCSP 1: Autentificare student (formular UI + API JWT)', story: 'US1' },
        { name: 'SCSP 2: Înregistrare utilizatori (formular UI + API)', story: 'US2' },
        { name: 'SCSP 3: Gestionare profil utilizator (UI + API actualizare)', story: 'US3' },
        { name: 'SCSP 4: Vizualizare orar basic student (UI + DB)', story: 'US4' }
      ]
    },
    { 
      id: 2, 
      name: 'Sprint 2', 
      subtitle: 'Orare & Notificări manuale',
      period: '15–22 iunie 2025',
      points: 4, 
      status: 'in-progress',
      objective: 'Extinderea modulului de orare și introducerea sistemului de notificări manuale.',
      tasks: [
        { name: 'SCSP 5: Vizualizare orar profesor (UI + API)', story: 'US5' },
        { name: 'SCSP 6: Creare & editare orar administrator (UI + validare backend)', story: 'US6' },
        { name: 'SCSP 7: Trimitere notificări (UI + API)', story: 'US7' },
        { name: 'SCSP 8: Vizualizare notificări student (UI + API)', story: 'US8' }
      ]
    },
    { 
      id: 3, 
      name: 'Sprint 3', 
      subtitle: 'Notificări automate & Note',
      period: '23–30 iunie 2025',
      points: 2, 
      status: 'planned',
      objective: 'Automatizarea notificărilor și implementarea modulului de note.',
      tasks: [
        { name: 'SCSP 9: Notificări automate la evenimente (backend trigger)', story: 'US9' },
        { name: 'SCSP 10: Introducere note profesor (UI tabel editabil + API tranzacțional)', story: 'US10' }
      ]
    },
    { 
      id: 4, 
      name: 'Sprint 4', 
      subtitle: 'Dashboard note & Cursuri',
      period: '1–7 iulie 2025',
      points: 3, 
      status: 'planned',
      objective: 'Prezentarea și filtrarea rezultatelor – dashboard note și evidență prezență – și crearea cursurilor.',
      tasks: [
        { name: 'SCSP 11: Vizualizare note student (dashboard React + API)', story: 'US11' },
        { name: 'SCSP 12: Evidență prezență (UI tabel + API)', story: 'US12' },
        { name: 'SCSP 13: Creare cursuri și alocare profesori (UI + API)', story: 'US13' }
      ]
    },
    { 
      id: 5, 
      name: 'Sprint 5', 
      subtitle: 'Înscrieri & CI/CD',
      period: '8–14 iulie 2025',
      points: 2, 
      status: 'planned',
      objective: 'Gestionarea înscrierii studenților la cursuri/grupe și stabilirea procesului de livrare continuă (CI/CD + teste unitare).',
      tasks: [
        { name: 'SCSP 14: Înscriere studenți la cursuri/grupe (UI drag and drop + API)', story: 'US14' },
        { name: 'Configurare GitHub Actions (CI/CD pipeline)', story: 'Infrastructure' },
        { name: 'Scriere teste unitare backend (Mocha/Chai)', story: 'Testing' }
      ]
    },
    { 
      id: 6, 
      name: 'Sprint 6', 
      subtitle: 'Import masiv & Testare finală',
      period: '15–21 iulie 2025',
      points: 2, 
      status: 'planned',
      objective: 'Import masiv de studenți și testare finală a întregului flux.',
      tasks: [
        { name: 'SCSP 15: Import masiv studenți din CSV/Excel (backend batch + raportare)', story: 'US15' },
        { name: 'Testare manuală end to end (login, orar, notificări, note, profil)', story: 'E2E Testing' }
      ]
    }
  ]

  const technologies = [
    { name: 'React', category: 'Frontend', icon: Code },
    { name: 'Node.js', category: 'Backend', icon: Code },
    { name: 'MySQL', category: 'Database', icon: Database },
    { name: 'GitHub Actions', category: 'CI/CD', icon: GitBranch },
    { name: 'YouTrack', category: 'Management', icon: Target },
  ]

  const challenges = [
    {
      title: 'Estimarea precisă a efortului pentru funcționalități complexe',
      description: 'Dificultatea în estimarea precisă a Story Points și a timpului necesar pentru implementarea funcționalităților mai complexe din sistem.',
      solution: 'S-a utilizat tehnica Planning Poker în sesiunile de rafinare a Product Backlog-ului, implicând toate rolurile în procesul de estimare. User Stories mari au fost descompuse în sub-taskuri mai mici și mai clare, reducând incertitudinea și crescând acuratețea estimărilor.',
      impact: 'Îmbunătățirea acurateței estimărilor cu ~30% prin descompunerea în sub-taskuri'
    },
    {
      title: 'Menținerea ritmului de lucru într-un proiect individual',
      description: 'Provocarea de a simula disciplina unei echipe Agile în contextul unui proiect dezvoltat individual, fără beneficiile colaborării și peer-review-ului.',
      solution: 'Pentru a simula disciplina echipei Agile, am introdus sesiuni de lucru zilnice cu obiective mici, ca un pseudo „Daily Scrum". Board-ul YouTrack a fost utilizat pentru a urmări constant progresul și a marca sarcinile în funcție de stadiu: To Do, In Progress, Preview, Done.',
      impact: 'Menținerea unui ritm constant de dezvoltare și vizibilitate clară asupra progresului'
    },
    {
      title: 'Integrarea unui pipeline CI/CD funcțional',
      description: 'Complexitatea configurării unui sistem de integrare continuă și deployment automat pentru stack-ul tehnologic ales (React + Node.js + MySQL).',
      solution: 'Inițial, configurarea GitHub Actions a fost o provocare din cauza lipsei de exemple exacte pentru stack-ul proiectului. S-a pornit cu un workflow simplu pentru build și test, apoi s-au adăugat treptat pași pentru deploy și rularea automată a testelor. Template-uri existente și documentația GitHub Actions au fost reutilizate și adaptate.',
      impact: 'Pipeline funcțional cu build automat, teste și deployment pe fiecare commit'
    },
    {
      title: 'Detectarea și gestionarea erorilor (bug-uri)',
      description: 'Simularea procesului de QA și gestionarea bug-urilor într-un proiect individual, fără o echipă dedicată de testare.',
      solution: 'Pentru fiecare Sprint, au fost presupuse și documentate bug-uri posibile, apoi adăugate în YouTrack ca Bug issues și distribuite pe coloanele relevante (ex: Bugs, In Progress, Preview). Această abordare a permis simularea realistă a procesului de testare și fixare, chiar dacă nu a existat o echipă QA dedicată.',
      impact: 'Proces structurat de identificare și rezolvare a problemelor înainte de producție'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Sistem de Gestionare a Studenților și Profesorilor
                </h1>
                <p className="text-sm text-gray-600">Proiect Individual - Managementul Dezvoltării Software</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleDownloadDocumentation}
                className="download-button"
              >
                <Download className="h-4 w-4 mr-2" />
                Documentație
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-4 md:space-y-6">
          {/* Desktop Navigation */}
          <TabsList className="hidden md:grid w-full grid-cols-6 bg-gradient-to-r from-blue-50 to-purple-50 p-1 rounded-lg">
            <TabsTrigger value="overview" className="tab-trigger">Prezentare Generală</TabsTrigger>
            <TabsTrigger value="requirements" className="tab-trigger">Cerințe SRS</TabsTrigger>
            <TabsTrigger value="methodology" className="tab-trigger">Metodologie</TabsTrigger>
            <TabsTrigger value="planning" className="tab-trigger">Planificare</TabsTrigger>
            <TabsTrigger value="architecture" className="tab-trigger">Arhitectură</TabsTrigger>
            <TabsTrigger value="challenges" className="tab-trigger">Provocări</TabsTrigger>
          </TabsList>

          {/* Mobile Navigation - Bottom Bar */}
          <div className="md:hidden mobile-bottom-nav">
            <div className="mobile-nav-container">
              <button
                onClick={() => handleTabChange('overview')}
                className={`mobile-nav-tab ${activeTab === 'overview' ? 'active' : ''}`}
              >
                <Target className="h-4 w-4" />
                {activeTab === 'overview' && <span className="mobile-tab-text">Prezentare</span>}
              </button>
              
              <button
                onClick={() => handleTabChange('requirements')}
                className={`mobile-nav-tab ${activeTab === 'requirements' ? 'active' : ''}`}
              >
                <FileText className="h-4 w-4" />
                {activeTab === 'requirements' && <span className="mobile-tab-text">Cerințe</span>}
              </button>
              
              <button
                onClick={() => handleTabChange('methodology')}
                className={`mobile-nav-tab ${activeTab === 'methodology' ? 'active' : ''}`}
              >
                <Zap className="h-4 w-4" />
                {activeTab === 'methodology' && <span className="mobile-tab-text">Metodologie</span>}
              </button>
              
              <button
                onClick={() => handleTabChange('planning')}
                className={`mobile-nav-tab ${activeTab === 'planning' ? 'active' : ''}`}
              >
                <Calendar className="h-4 w-4" />
                {activeTab === 'planning' && <span className="mobile-tab-text">Planificare</span>}
              </button>
              
              <button
                onClick={() => handleTabChange('architecture')}
                className={`mobile-nav-tab ${activeTab === 'architecture' ? 'active' : ''}`}
              >
                <Code className="h-4 w-4" />
                {activeTab === 'architecture' && <span className="mobile-tab-text">Arhitectură</span>}
              </button>
              
              <button
                onClick={() => handleTabChange('challenges')}
                className={`mobile-nav-tab ${activeTab === 'challenges' ? 'active' : ''}`}
              >
                <Target className="h-4 w-4" />
                {activeTab === 'challenges' && <span className="mobile-tab-text">Provocări</span>}
              </button>
            </div>
          </div>

          {/* Add bottom padding on mobile to account for fixed nav */}
          <div className="md:hidden h-16"></div>

          <div className={`transition-opacity duration-150 ${isTabChanging ? 'opacity-0' : 'opacity-100'}`}>
          {/* Overview Tab */}
          <TabsContent value="overview" className="tab-content space-y-6"
            key={`overview-${animationKey}`}>
            <div className="grid-exactly-3 grid-animated">
              <Card className="card-animated card-small">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Obiective Realizate</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">40%</div>
                  <p className="text-xs text-muted-foreground">Sprint 1 complet + Sprint 2 în progres</p>
                </CardContent>
              </Card>
              
              <Card className="card-animated card-small">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Story Points Totale</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">93</div>
                  <p className="text-xs text-muted-foreground">SCSP în 6 Sprint-uri</p>
                </CardContent>
              </Card>
              
              <Card className="card-animated card-small">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Timp Alocat</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">6 wk</div>
                  <p className="text-xs text-muted-foreground">7 iunie - 21 iulie 2025</p>
                </CardContent>
              </Card>
            </div>

            <Card className="card-animated card-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" />
                  <span>Scopul Proiectului</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid-exactly-3 grid-animated">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Centralizarea Informațiilor</h4>
                    <p className="text-sm text-blue-700">Crearea unei platforme unificate pentru gestionarea datelor studenților și profesorilor</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Îmbunătățirea Comunicării</h4>
                    <p className="text-sm text-green-700">Facilitarea comunicării rapide prin intermediul unui sistem de notificări</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Optimizarea Proceselor</h4>
                    <p className="text-sm text-purple-700">Automatizarea sarcinilor administrative și reducerea erorilor</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-animated card-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="h-5 w-5" />
                  <span>Stack Tehnologic</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid-uniform-4 grid-animated">
                  {technologies.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                      <tech.icon className="h-8 w-8 text-blue-600 mb-2" />
                      <span className="font-medium text-sm">{tech.name}</span>
                      <span className="text-xs text-gray-500">{tech.category}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Requirements Tab */}
          <TabsContent value="requirements" className="tab-content space-y-6"
            key={`requirements-${animationKey}`}>
            <Card className="card-animated">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>Funcționalități Principale (User Stories)</span>
                </CardTitle>
                <CardDescription>
                  Cerințele funcționale ale sistemului formulate ca User Stories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {userStories.map((story) => (
                    <div key={story.id}>
                      <Collapsible 
                        open={expandedUserStory === story.id} 
                        onOpenChange={(isOpen) => setExpandedUserStory(isOpen ? story.id : null)}
                      >
                        <CollapsibleTrigger asChild>
                          <div className={`user-story-trigger flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-colors ${expandedUserStory === story.id ? 'expanded' : ''}`}>
                            <div className="flex items-center space-x-3">
                              <Badge variant={story.status === 'done' ? 'default' : story.status === 'in-progress' ? 'secondary' : 'outline'}>
                                {story.id}
                              </Badge>
                              <span className="font-medium">{story.title}</span>
                              <ChevronRight className={`user-story-chevron h-4 w-4 text-gray-500 ${expandedUserStory === story.id ? 'expanded' : 'collapsed'}`} />
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline">{story.points} SP</Badge>
                              {story.status === 'done' && <CheckCircle className="h-4 w-4 text-green-600" />}
                              {story.status === 'in-progress' && <Clock className="h-4 w-4 text-yellow-600" />}
                            </div>
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="user-story-content px-4 pb-4">
                          <div className="user-story-details mt-4 space-y-4 border-t pt-4">
                            <div>
                              <h4 className="font-semibold text-sm text-gray-700 mb-2">Descriere:</h4>
                              <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded">{story.details.description}</p>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-sm text-gray-700 mb-2">Criterii de Acceptare:</h4>
                              <ul className="space-y-1">
                                {story.details.acceptanceCriteria.map((criteria, index) => (
                                  <li key={index} className="acceptance-criteria-item flex items-start space-x-2 text-sm">
                                    <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-600">{criteria}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-4 pt-2">
                              <div>
                                <h5 className="font-semibold text-xs text-gray-500 uppercase mb-1">Prioritate</h5>
                                <Badge variant={story.details.priority === 'High' ? 'destructive' : story.details.priority === 'Medium' ? 'secondary' : 'outline'} className="priority-badge text-xs">
                                  {story.details.priority}
                                </Badge>
                              </div>
                              <div>
                                <h5 className="font-semibold text-xs text-gray-500 uppercase mb-1">Asignat</h5>
                                <span className="text-sm text-gray-600">{story.details.assignee}</span>
                              </div>
                              <div>
                                <h5 className="font-semibold text-xs text-gray-500 uppercase mb-1">Efort</h5>
                                <span className="text-sm text-gray-600">{story.details.effort}</span>
                              </div>
                            </div>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid-uniform-2 grid-animated">
              <Card className="card-animated card-medium">
                <CardHeader>
                  <CardTitle>Gestionarea Utilizatorilor</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Autentificare și autorizare</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Gestionarea profilurilor</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Roluri și permisiuni</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-animated card-medium">
                <CardHeader>
                  <CardTitle>Gestionarea Orarelor</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Creare și modificare orare</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Vizualizare personalizată</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bell className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Notificări modificări</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Methodology Tab */}
          <TabsContent value="methodology" className="tab-content space-y-6"
            key={`methodology-${animationKey}`}>
            <Card className="card-animated card-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>Metodologia Agile Scrum</span>
                </CardTitle>
                <CardDescription>
                  Aplicarea principiilor Scrum pentru dezvoltarea iterativă și incrementală
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid-exactly-3 grid-animated">
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Product Owner</h4>
                    <p className="text-sm text-gray-600">Definirea și prioritizarea Product Backlog-ului</p>
                  </div>
                  
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Scrum Master</h4>
                    <p className="text-sm text-gray-600">Facilitarea procesului și eliminarea obstacolelor</p>
                  </div>
                  
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Echipa de Dezvoltare</h4>
                    <p className="text-sm text-gray-600">Implementarea funcționalităților și testarea</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-animated card-medium">
              <CardHeader>
                <CardTitle>Justificarea Alegerii Metodologiei</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid-uniform-2 grid-animated">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h5 className="font-medium">Flexibilitate și Adaptabilitate</h5>
                        <p className="text-sm text-gray-600">Adaptare rapidă la cerințele în schimbare</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h5 className="font-medium">Livrare Iterativă</h5>
                        <p className="text-sm text-gray-600">Incremente funcționale în Sprint-uri scurte</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h5 className="font-medium">Transparență și Vizibilitate</h5>
                        <p className="text-sm text-gray-600">Progresul vizibil pentru toate părțile</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h5 className="font-medium">Calitate Îmbunătățită</h5>
                        <p className="text-sm text-gray-600">Integrare și testare continuă</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-animated card-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Evenimente Scrum</span>
                </CardTitle>
                <CardDescription>
                  Ceremoniile cheie pentru menținerea ritmului și transparenței
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid-uniform-2 grid-animated">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h5 className="font-medium">Sprint Planning</h5>
                        <p className="text-sm text-gray-600">Planificarea sarcinilor pentru următorul Sprint</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h5 className="font-medium">Daily Scrum</h5>
                        <p className="text-sm text-gray-600">Sincronizare zilnică a echipei</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Target className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h5 className="font-medium">Sprint Review</h5>
                        <p className="text-sm text-gray-600">Demonstrarea incrementului dezvoltat</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Zap className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h5 className="font-medium">Sprint Retrospective</h5>
                        <p className="text-sm text-gray-600">Analiză și îmbunătățire continuă</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Planning Tab */}
          <TabsContent value="planning" className="tab-content space-y-6"
            key={`planning-${animationKey}`}>
            <Card className="card-animated card-large">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  <span>Planificarea Sprint-urilor</span>
                </CardTitle>
                <CardDescription>
                  Organizarea muncii în 6 Sprint-uri de câte o săptămână fiecare
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 grid-animated">
                  {sprints.map((sprint) => (
                    <Card key={sprint.id} className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                      sprint.status === 'completed' ? 'bg-gradient-to-br from-green-50 to-green-100 border-green-300' :
                      sprint.status === 'in-progress' ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300' :
                      'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-300'
                    }`}>
                      {/* Status indicator band */}
                      <div className={`absolute top-0 left-0 right-0 h-1 ${
                        sprint.status === 'completed' ? 'bg-green-500' :
                        sprint.status === 'in-progress' ? 'bg-blue-500' :
                        'bg-gray-400'
                      }`}></div>
                      
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg font-bold">{sprint.name}</CardTitle>
                          <Badge variant={
                            sprint.status === 'completed' ? 'default' :
                            sprint.status === 'in-progress' ? 'secondary' :
                            'outline'
                          } className="text-xs font-medium">
                            {sprint.status === 'completed' ? '✓ Finalizat' :
                             sprint.status === 'in-progress' ? '⏳ În progres' :
                             '📅 Planificat'}
                          </Badge>
                        </div>
                        <CardDescription className="text-sm font-medium text-gray-700 mt-1">
                          {sprint.subtitle}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        {/* Statistics */}
                        <div className="flex justify-between items-center bg-white/60 rounded-lg p-3">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-gray-800">{sprint.points}</div>
                            <div className="text-xs text-gray-600">SCSP</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm font-semibold text-gray-800">{sprint.period}</div>
                            <div className="text-xs text-gray-600">Perioada</div>
                          </div>
                        </div>
                        
                        {/* Objective */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-gray-800 flex items-center">
                            🎯 Obiectiv
                          </h4>
                          <p className="text-sm text-gray-700 leading-relaxed bg-white/40 p-2 rounded">
                            {sprint.objective}
                          </p>
                        </div>
                        
                        {/* Tasks preview */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-gray-800 flex items-center">
                            📋 Sarcini ({sprint.tasks.length})
                          </h4>
                          <div className="space-y-1">
                            {sprint.tasks.slice(0, 2).map((task, idx) => (
                              <div key={idx} className="flex items-start space-x-2 text-sm">
                                <span className="text-gray-500 mt-1">•</span>
                                <span className="text-gray-700 leading-relaxed">{task.name.replace(/^SCSP \d+: /, '')}</span>
                              </div>
                            ))}
                            {sprint.tasks.length > 2 && (
                              <div className="text-xs text-gray-500 italic pl-3">
                                ... și încă {sprint.tasks.length - 2} sarcini
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {/* Progress bar */}
                        {sprint.status === 'completed' && (
                          <div className="pt-2">
                            <Progress value={100} className="h-2" />
                            <div className="text-xs text-green-600 text-center mt-1 font-medium">Complet</div>
                          </div>
                        )}
                        {sprint.status === 'in-progress' && (
                          <Progress value={65} className="mt-2" />
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-animated card-medium">
              <CardHeader>
                <CardTitle>Estimarea cu Story Points</CardTitle>
                <CardDescription>
                  Utilizarea scalei Fibonacci modificate pentru estimarea complexității
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {[1, 2, 3, 5, 8, 13, 20].map((point) => (
                      <Badge key={point} variant="outline" className="text-lg px-4 py-2">
                        {point}
                      </Badge>
                    ))}
                  </div>
                  <div className="grid-exactly-3 grid-animated">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">2.5</div>
                      <p className="text-sm text-gray-600">SCSP medii per Sprint</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">6</div>
                      <p className="text-sm text-gray-600">Sprint-uri Totale</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">45d</div>
                      <p className="text-sm text-gray-600">Durată Totală Proiect</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Architecture Tab */}
          <TabsContent value="architecture" className="tab-content space-y-6"
            key={`architecture-${animationKey}`}>
            <Card className="card-animated card-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>Arhitectura pe Trei Niveluri</span>
                </CardTitle>
                <CardDescription>
                  Separarea preocupărilor pentru scalabilitate și mentenabilitate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid-exactly-3 grid-animated">
                  <div className="text-center p-6 border-2 border-blue-200 rounded-lg">
                    <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="font-semibold text-blue-900 mb-2">Nivelul de Prezentare</h4>
                    <p className="text-sm text-gray-600 mb-3">Frontend - React</p>
                    <Badge variant="outline">Interfața Utilizator</Badge>
                  </div>
                  
                  <div className="text-center p-6 border-2 border-green-200 rounded-lg">
                    <Code className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h4 className="font-semibold text-green-900 mb-2">Nivelul de Logică</h4>
                    <p className="text-sm text-gray-600 mb-3">Backend - Node.js</p>
                    <Badge variant="outline">API RESTful</Badge>
                  </div>
                  
                  <div className="text-center p-6 border-2 border-purple-200 rounded-lg">
                    <Database className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h4 className="font-semibold text-purple-900 mb-2">Nivelul de Date</h4>
                    <p className="text-sm text-gray-600 mb-3">Database - MySQL</p>
                    <Badge variant="outline">Persistența Datelor</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-animated card-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GitBranch className="h-5 w-5" />
                  <span>Pipeline CI/CD</span>
                </CardTitle>
                <CardDescription>
                  Automatizarea proceselor de dezvoltare cu GitHub Actions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid-uniform-4 grid-animated">
                  {[
                    { name: 'Code', icon: Code, color: 'blue' },
                    { name: 'Build', icon: Zap, color: 'green' },
                    { name: 'Test', icon: CheckCircle, color: 'purple' },
                    { name: 'Package', icon: Database, color: 'orange' },
                    { name: 'Staging', icon: Globe, color: 'yellow' },
                    { name: 'Validate', icon: Shield, color: 'red' },
                    { name: 'Production', icon: Globe, color: 'teal' },
                  ].map((step, index) => (
                    <div key={index} className={`text-center p-3 bg-${step.color}-50 rounded-lg`}>
                      <step.icon className={`h-6 w-6 text-${step.color}-600 mx-auto mb-1`} />
                      <h5 className="font-semibold text-xs">{step.name}</h5>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h5 className="font-semibold text-green-900 mb-2">Beneficii CI/CD</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Livrare rapidă și frecventă</li>
                      <li>• Calitate îmbunătățită prin testare automată</li>
                      <li>• Risc redus prin validare continuă</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h5 className="font-semibold text-blue-900 mb-2">Metrici de Performanță</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Uptime:</span>
                        <span className="font-semibold text-blue-700">99.5%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Deploy Time:</span>
                        <span className="font-semibold text-blue-700">&lt; 5min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Challenges Tab */}
          <TabsContent value="challenges" className="tab-content space-y-6"
            key={`challenges-${animationKey}`}>
            <Card className="card-animated card-large">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Provocări Întâmpinate și Soluții Aplicate</span>
                </CardTitle>
                <CardDescription>
                  Lecții învățate din aplicarea metodologiilor Agile în proiect
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 grid-animated">
                  {challenges.map((challenge, index) => (
                    <div key={index} className="border rounded-lg p-6 bg-gradient-to-r from-gray-50 to-blue-50">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Target className="h-6 w-6 text-red-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-red-700 mb-3 text-lg leading-relaxed">
                            🚨 {challenge.title}
                          </h4>
                          <div className="mb-4 p-3 bg-red-50 rounded-lg border-l-4 border-red-300">
                            <p className="text-gray-700 leading-relaxed">{challenge.description}</p>
                          </div>
                          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-300 mb-3">
                            <h5 className="font-semibold text-green-700 mb-2 flex items-center">
                              ✅ Soluție Aplicată
                            </h5>
                            <p className="text-green-700 leading-relaxed">{challenge.solution}</p>
                          </div>
                          {challenge.impact && (
                            <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-300">
                              <h5 className="font-semibold text-blue-700 mb-1 flex items-center">
                                📊 Impact
                              </h5>
                              <p className="text-sm text-blue-600 leading-relaxed">{challenge.impact}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-animated">
              <CardHeader>
                <CardTitle>Învățăminte Cheie și Rezultate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 grid-animated">
                  <div>
                    <h5 className="font-semibold mb-3">Competențe Dezvoltate:</h5>
                    <div className="space-y-2">
                      {[
                        'Managementul proiectelor Agile/Scrum',
                        'Estimarea cu Story Points',
                        'Configurarea pipeline-urilor CI/CD',
                        'Documentarea tehnică detaliată'
                      ].map((skill, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Impactul Proiectului:</h5>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-yellow-50 rounded-lg">
                        <GraduationCap className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                        <h6 className="font-semibold text-sm">Succese</h6>
                        <p className="text-xs text-gray-600">Livrare la timp</p>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <h6 className="font-semibold text-sm">Colaborare</h6>
                        <p className="text-xs text-gray-600">Echipă unită</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          </div>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2025 Proiect Individual - Managementul Dezvoltării Software
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.open('https://laurentiutest.youtrack.cloud/', '_blank')}
              >
                <Target className="h-4 w-4 mr-2" />
                YouTrack
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

