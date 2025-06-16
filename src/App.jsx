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
      points: 1, 
      status: 'done',
      details: {
        description: 'SCSP 1: Ca student, vreau să mă autentific în sistem pentru a accesa funcționalitățile.',
        acceptanceCriteria: [
          'Formular React cu câmpuri email și parolă',
          'Validare live format email și lungime parolă',
          'API Node.js pentru autentificare cu JWT',
          'Token JWT cu expirare 24h și rol utilizator',
          'Mesaje de eroare clare și animații focus/blur'
        ],
        priority: 'High',
        assignee: 'Frontend + Backend',
        effort: 'Formular UI + API JWT'
      }
    },
    { 
      id: 'US2', 
      title: 'Înregistrare utilizatori', 
      points: 1, 
      status: 'done',
      details: {
        description: 'SCSP 2: Ca utilizator nou, vreau să mă înregistrez pentru a avea cont în sistem.',
        acceptanceCriteria: [
          'Pagină React cu câmpuri nume, email, parolă, tip utilizator',
          'Validări unicitate email și confirmare parolă',
          'Endpoint Node.js pentru înregistrare cu validări',
          'Inserare cont nou cu parolă criptată în MySQL',
          'Alertă confirmare la înregistrare reușită'
        ],
        priority: 'High',
        assignee: 'Frontend + Backend',
        effort: 'Formular UI + API'
      }
    },
    { 
      id: 'US3', 
      title: 'Gestionare profil utilizator', 
      points: 1, 
      status: 'done',
      details: {
        description: 'SCSP 3: Ca utilizator autentificat, vreau să îmi gestionez profilul personal.',
        acceptanceCriteria: [
          'Pagină React pentru vizualizare/editare date personale',
          'Funcționalitate schimbare parolă cu validări',
          'Endpoint REST pentru actualizare profil în MySQL',
          'Feedback vizual (spinner, toast) la modificări',
          'Hashing bcrypt pentru parole și rollback la eroare'
        ],
        priority: 'Medium',
        assignee: 'Frontend + Backend',
        effort: 'UI + API actualizare'
      }
    },
    { 
      id: 'US4', 
      title: 'Vizualizare orar basic student', 
      points: 1, 
      status: 'done',
      details: {
        description: 'SCSP 4: Ca student, vreau să vizualizez orarul pentru a cunoaște programul.',
        acceptanceCriteria: [
          'Componentă React cu afișare orar structurat pe zile/ore',
          'Interogare rapidă MySQL pe ID student',
          'Tabele pentru orare în baza de date',
          'Lista cursuri cu detalii (sală, profesor)',
          'Design responsive pentru mobile'
        ],
        priority: 'High',
        assignee: 'Fullstack',
        effort: 'UI + DB'
      }
    },
    { 
      id: 'US5', 
      title: 'Vizualizare orar profesor', 
      points: 1, 
      status: 'in-progress',
      details: {
        description: 'SCSP 5: Ca profesor, vreau să vizualizez orarul meu cu navigare pe săptămâni.',
        acceptanceCriteria: [
          'Componentă React cu navigare între săptămâni',
          'Indicatoare vizuale pentru tipuri activități',
          'Endpoint Node.js pentru preluare evenimente profesor',
          'Grupare după zi și oră cu JSON structurat',
          'Afișare detalii complete pentru fiecare activitate'
        ],
        priority: 'Medium',
        assignee: 'Frontend + Backend',
        effort: 'UI + API'
      }
    },
    { 
      id: 'US6', 
      title: 'Creare & editare orar administrator', 
      points: 1, 
      status: 'in-progress',
      details: {
        description: 'SCSP 6: Ca administrator, vreau să creez și editez orare pentru organizarea activităților.',
        acceptanceCriteria: [
          'Formular React cu dropdown-uri pentru sală/grupă/profesor',
          'Avertismente vizuale pentru conflicte orar',
          'Validare backend suprapuneri cu interogări SQL complexe',
          'Verificări interval orar și disponibilitate resurse',
          'Mesaje detaliate despre conflicte pentru UI'
        ],
        priority: 'High',
        assignee: 'Frontend + Backend',
        effort: 'UI + validare backend'
      }
    },
    { 
      id: 'US7', 
      title: 'Trimitere notificări', 
      points: 1, 
      status: 'in-progress',
      details: {
        description: 'SCSP 7: Ca profesor, vreau să trimit notificări studenților pentru comunicare.',
        acceptanceCriteria: [
          'Panou React cu editor rich-text pentru mesaje',
          'Selectare multiplă grupelor cu previzualizare',
          'Buton trimitere cu confirmare tip modal',
          'Endpoint Node.js pentru salvare și trimitere',
          'WebSocket/Push pentru notificare instant'
        ],
        priority: 'High',
        assignee: 'Frontend + Backend',
        effort: 'UI + API'
      }
    },
    { 
      id: 'US8', 
      title: 'Vizualizare notificări student', 
      points: 1, 
      status: 'in-progress',
      details: {
        description: 'SCSP 8: Ca student, vreau să vizualizez notificările primite.',
        acceptanceCriteria: [
          'Dashboard React cu notificări sortate după dată',
          'Opțiuni filtrare pe curs și marcare "citit"',
          'Paginare și indicator notificări noi',
          'Integrare cu sistemul de notificări real-time',
          'Arhivare notificări vechi automat'
        ],
        priority: 'Medium',
        assignee: 'Frontend + Backend',
        effort: 'UI + API'
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
      title: 'Estimarea timpului',
      description: 'Dificultatea în estimarea precisă a Story Points pentru funcționalități complexe',
      solution: 'Utilizarea Planning Poker și descompunerea task-urilor mari în sub-sarcini mai mici'
    },
    {
      title: 'Colaborarea echipei',
      description: 'Coordonarea muncii în echipă și comunicarea eficientă',
      solution: 'Daily Scrum meetings și utilizarea YouTrack pentru transparența sarcinilor'
    },
    {
      title: 'Configurarea CI/CD',
      description: 'Complexitatea configurării pipeline-ului de automatizare',
      solution: 'Implementare incrementală și utilizarea template-urilor GitHub Actions'
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
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-gradient-to-r from-blue-50 to-purple-50 p-1 rounded-lg">
            <TabsTrigger value="overview" className="tab-trigger">Prezentare Generală</TabsTrigger>
            <TabsTrigger value="requirements" className="tab-trigger">Cerințe SRS</TabsTrigger>
            <TabsTrigger value="methodology" className="tab-trigger">Metodologie</TabsTrigger>
            <TabsTrigger value="planning" className="tab-trigger">Planificare</TabsTrigger>
            <TabsTrigger value="architecture" className="tab-trigger">Arhitectură</TabsTrigger>
            <TabsTrigger value="challenges" className="tab-trigger">Provocări</TabsTrigger>
          </TabsList>

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
                  <div className="text-2xl font-bold text-blue-600">15</div>
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
                    <div key={index} className="border rounded-lg p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Target className="h-6 w-6 text-red-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-red-700 mb-2">Provocare: {challenge.title}</h4>
                          <p className="text-gray-600 mb-4">{challenge.description}</p>
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h5 className="font-semibold text-green-700 mb-1">Soluție Aplicată:</h5>
                            <p className="text-sm text-green-600">{challenge.solution}</p>
                          </div>
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

