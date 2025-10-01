import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BackendsComponent } from './pages/backends/backends.component';
import { ApisComponent } from './pages/apis/apis.component';
import { GatewaysComponent } from './pages/gateways/gateways.component';
import { TestesComponent } from './pages/testes/testes.component';
import { TagsComponent } from './pages/tags/tags.component';
import { DocumentacaoComponent } from './pages/documentacao/documentacao.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { createAuthGuard } from 'keycloak-angular';


export const routes: Routes = [
  
  {path: 'home',          component: HomeComponent, canActivate: [createAuthGuard] },
  {path: 'tags',          component: TagsComponent            },
  {path: 'apis',          component: ApisComponent            },
  {path: 'testes',        component: TestesComponent          },
  {path: 'usuario',       component: UsuarioComponent         },
  {path: 'backends',      component: BackendsComponent        },
  {path: 'gateways',      component: GatewaysComponent        },
  {path: 'dashboard',     component: DashboardComponent       },
  {path: 'documentação',  component: DocumentacaoComponent    },
  {path: 'configurações', component: ConfiguracoesComponent   },

]