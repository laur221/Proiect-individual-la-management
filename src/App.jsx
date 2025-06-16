import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Progress } from '@/components/ui/progress.jsx'
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
  Download
} from 'lucide-react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('overview')

  const userStories = [
    { id: 'US1', title: 'Autentificare utilizatori', points: 3, status: 'done' },
    { id: 'US2', title: 'Introducere note', points: 8, status: 'in-progress' },
    { id: 'US3', title: 'Creare orare', points: 5, status: 'done' },
    { id: 'US4', title: 'Vizualizare orar', points: 3, status: 'done' },
    { id: 'US5', title: 'Trimitere notificări', points: 5, status: 'todo' },
  ]

  const sprints = [
    { id: 1, name: 'Sprint 1', points: 15, status: 'completed' },
    { id: 2, name: 'Sprint 2', points: 18, status: 'in-progress' },
    { id: 3, name: 'Sprint 3', points: 16, status: 'planned' },
    { id: 4, name: 'Sprint 4', points: 11, status: 'planned' },
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
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
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4 mr-2" />
                Documentație
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Prezentare Generală</TabsTrigger>
            <TabsTrigger value="requirements">Cerințe SRS</TabsTrigger>
            <TabsTrigger value="methodology">Metodologie</TabsTrigger>
            <TabsTrigger value="planning">Planificare</TabsTrigger>
            <TabsTrigger value="architecture">Arhitectură</TabsTrigger>
            <TabsTrigger value="challenges">Provocări</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Obiective Realizate</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">50%</div>
                  <p className="text-xs text-muted-foreground">Toate obiectivele îndeplinite</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Story Points Totale</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">60</div>
                  <p className="text-xs text-muted-foreground">Distribuite pe 4 Sprint-uri</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Timp Alocat</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">30h</div>
                  <p className="text-xs text-muted-foreground">Proiect individual</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" />
                  <span>Scopul Proiectului</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="h-5 w-5" />
                  <span>Stack Tehnologic</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
          <TabsContent value="requirements" className="space-y-6">
            <Card>
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
                    <div key={story.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Badge variant={story.status === 'done' ? 'default' : story.status === 'in-progress' ? 'secondary' : 'outline'}>
                          {story.id}
                        </Badge>
                        <span className="font-medium">{story.title}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{story.points} SP</Badge>
                        {story.status === 'done' && <CheckCircle className="h-4 w-4 text-green-600" />}
                        {story.status === 'in-progress' && <Clock className="h-4 w-4 text-yellow-600" />}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
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

              <Card>
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
          <TabsContent value="methodology" className="space-y-6">
            <Card>
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

            <Card>
              <CardHeader>
                <CardTitle>Justificarea Alegerii Metodologiei</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </TabsContent>

          {/* Planning Tab */}
          <TabsContent value="planning" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Planificarea Sprint-urilor</span>
                </CardTitle>
                <CardDescription>
                  Organizarea muncii în Sprint-uri de 1 săptămână
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {sprints.map((sprint) => (
                    <Card key={sprint.id} className={`${
                      sprint.status === 'completed' ? 'bg-green-50 border-green-200' :
                      sprint.status === 'in-progress' ? 'bg-blue-50 border-blue-200' :
                      'bg-gray-50 border-gray-200'
                    }`}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{sprint.name}</CardTitle>
                        <Badge variant={
                          sprint.status === 'completed' ? 'default' :
                          sprint.status === 'in-progress' ? 'secondary' :
                          'outline'
                        }>
                          {sprint.status === 'completed' ? 'Finalizat' :
                           sprint.status === 'in-progress' ? 'În progres' :
                           'Planificat'}
                        </Badge>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-center">{sprint.points} SP</div>
                        {sprint.status === 'completed' && (
                          <Progress value={100} className="mt-2" />
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

            <Card>
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
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">15</div>
                      <p className="text-sm text-gray-600">Velocity Medie (SP/Sprint)</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">4</div>
                      <p className="text-sm text-gray-600">Sprint-uri Totale</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">30h</div>
                      <p className="text-sm text-gray-600">Durată Estimată</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Architecture Tab */}
          <TabsContent value="architecture" className="space-y-6">
            <Card>
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

            <Card>
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
                <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
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
          <TabsContent value="challenges" className="space-y-6">
            <Card>
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
                <div className="space-y-6">
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

            <Card>
              <CardHeader>
                <CardTitle>Învățăminte Cheie și Rezultate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <Button variant="ghost" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Descarcă PDF
              </Button>
              <Button variant="ghost" size="sm">
                <GitBranch className="h-4 w-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

