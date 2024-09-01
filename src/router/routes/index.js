// ** React Imports
import { Fragment, lazy } from "react"
import { Navigate } from "react-router-dom"
// ** Layouts
import BlankLayout from "@layouts/BlankLayout"
import VerticalLayout from "@src/layouts/VerticalLayout"
import HorizontalLayout from "@src/layouts/HorizontalLayout"
import LayoutWrapper from "@src/@core/layouts/components/layout-wrapper"

// ** Route Components
import PublicRoute from "@components/routes/PublicRoute"

// ** Utils
import { isObjEmpty } from "@utils"

const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout />,
  horizontal: <HorizontalLayout />
}

// ** Document title
const TemplateTitle = "%s - Bioseta"

// ** Default Route
const DefaultRoute = "/home"

const Home = lazy(() => import("../../views/home"))
const Login = lazy(() => import("../../views/auth/login"))
const SecondPage = lazy(() => import("../../views/SecondPage"))
const ClientesLista = lazy(() => import("../../views/clientes/lista"))
const ClientesForm = lazy(() => import("../../views/clientes/form"))
const ContatosLista = lazy(() => import("../../views/clientes/contatos/lista"))
const ContatosForm = lazy(() => import("../../views/clientes/contatos/form"))
const DominiosLista = lazy(() => import("../../views/clientes/dominios/lista"))
const DominiosForm = lazy(() => import("../../views/clientes/dominios/form"))
const EmpresasLista = lazy(() => import("../../views/empresas/lista"))
const EmpresasForm = lazy(() => import("../../views/empresas/form"))
const EmpresasDocumentos = lazy(() => import("../../views/empresas/documentos/lista"))
const FuncionariosLista = lazy(() => import("../../views/funcionarios/lista"))
const FuncionariosForm = lazy(() => import("../../views/funcionarios/form"))
const FuncionariosDoducmentos = lazy(() => import("../../views/funcionarios/documentos/lista"))
const Logs = lazy(() => import("../../views/logs/lista"))
const Documentos = lazy(() => import("../../views/documentos/lista"))
const DocumentosForm = lazy(() => import("../../views/documentos/form"))
const DocumentosTipo = lazy(() => import("../../views/documentos/tipos/lista"))
const DocumentosTipoForm = lazy(() => import("../../views/documentos/tipos/form"))
const FiltroForm = lazy(() => import("../../views/documentos/tipos/filtro/form"))
const DocumentosTiposParametrizacao = lazy(() => import("../../views/documentos/parametrizacao/lista"))
const DocumentosTiposParametrizacaoForm = lazy(() => import("../../views/documentos/parametrizacao/form"))
const DocumentosMerge = lazy(() => import("../../views/documentos/merge/lista"))
const DocumentosMergeForm = lazy(() => import("../../views/documentos/merge/form"))
const LotesForm = lazy(() => import("../../views/documentos/lotes"))
const LeitorForm = lazy(() => import("../../views/documentos/leitor"))
const SetoresLista = lazy(() => import("../../views/setores/lista"))
const SetoresForm = lazy(() => import("../../views/setores/form"))
const EnviosLista = lazy(() => import("../../views/envios/lista"))
const EnviosForm = lazy(() => import("../../views/envios/form"))
const EnviosDetalhe = lazy(() => import("../../views/envios/detalhe"))
const EmailForm = lazy(() => import("../../views/email/form"))
const Download = lazy(() => import("../../views/download"))

// Usuários
const UsuariosLista = lazy(() => import("../../views/usuarios/lista"))
const UsuariosForm = lazy(() => import("../../views/usuarios/form"))

const Error = lazy(() => import("../../views/Error"))

// ** Merge Routes
const Routes = [
  {
    path: "/",
    index: true,
    element: <Navigate replace to={DefaultRoute} />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/clientes",
    element: <ClientesLista />
  },
  {
    path: "/clientes/form",
    element: <ClientesForm />
  },
  {
    path: "/clientes/form/:id",
    element: <ClientesForm />
  },
  {
    path: "/clientes/contatos/:id",
    element: <ContatosLista />
  },
  {
    path: "/clientes/contatos/form/:id",
    element: <ContatosForm />
  },
  {
    path: "/clientes/contatos/form/:id/:item",
    element: <ContatosForm />
  },
  {
    path: "/clientes/dominios/:id",
    element: <DominiosLista />
  },
  {
    path: "/clientes/dominios/form/:id",
    element: <DominiosForm />
  },
  {
    path: "/clientes/dominios/form/:id/:item",
    element: <DominiosForm />
  },
  {
    path: "/empresas",
    element: <EmpresasLista />
  },
  {
    path: "/empresas/form",
    element: <EmpresasForm />
  },
  {
    path: "/empresas/form/:id",
    element: <EmpresasForm />
  },
  {
    path: "/empresas/documentos/:id",
    element: <EmpresasDocumentos />
  },
  {
    path: "/second-page",
    element: <SecondPage />
  },
  {
    path: "/funcionarios",
    element: <FuncionariosLista />
  },
  {
    path: "/funcionarios/form",
    element: <FuncionariosForm />
  },
  {
    path: "/funcionarios/form/:id",
    element: <FuncionariosForm />
  },
  {
    path: "/funcionarios/documentos/:id",
    element: <FuncionariosDoducmentos />
  },
  {
    path: "/logs",
    element: <Logs />
  },
  {
    path: "/documentos",
    element: <Documentos />
  },
  {
    path: "/documentos/form",
    element: <DocumentosForm />
  },
  {
    path: "/documentos/form/:id",
    element: <DocumentosForm />
  },
  {
    path: "/documento/tipos",
    element: <DocumentosTipo />
  },
  {
    path: "/documento/tipos/form",
    element: <DocumentosTipoForm />
  },
  {
    path: "/documento/tipos/form/:id",
    element: <DocumentosTipoForm />
  },
  {
    path: "/documento/tipos/parametrizacao/:id",
    element: <DocumentosTiposParametrizacao />
  },
  {
    path: "/documento/tipos/parametrizacao/form",
    element: <DocumentosTiposParametrizacaoForm />
  },
  {
    path: "/documento/tipos/parametrizacao/form/:id",
    element: <DocumentosTiposParametrizacaoForm />
  },
  {
    path: "/documento/tipos/parametrizacao/form/:id/:item",
    element: <DocumentosTiposParametrizacaoForm />
  },
  {
    path: "/documento/tipos/merge/:id",
    element: <DocumentosMerge />
  },
  {
    path: "/documento/tipos/merge/form",
    element: <DocumentosMergeForm />
  },
  {
    path: "/documento/tipos/merge/form/:id",
    element: <DocumentosMergeForm />
  },
  {
    path: "/documento/tipos/merge/form/:id/:item",
    element: <DocumentosMergeForm />
  },
  {
    path: "/documento/tipos/filtro/:id",
    element: <FiltroForm />
  },
  {
    path: "/documentos-lotes",
    element: <LotesForm />
  },
  {
    path: "/documentos-leitor",
    element: <LeitorForm />
  },
  {
    path: "/setores",
    element: <SetoresLista />
  },
  {
    path: "/setores/form",
    element: <SetoresForm />
  },
  {
    path: "/setores/form/:id",
    element: <SetoresForm />
  },
  {
    path: "/envios",
    element: <EnviosLista />
  },
  {
    path: "/envios/form",
    element: <EnviosForm />
  },
  {
    path: "/envios/form/:id",
    element: <EnviosForm />
  },
  {
    path: "/envios/detalhe/:id",
    element: <EnviosDetalhe />
  },
  {
    path: "/login",
    element: <Login />,
    meta: {
      layout: "blank"
    }
  },
  {
    path: "/email",
    element: <EmailForm />
  },
  {
    path: "/download/:id/:email",
    element: <Download />,
    meta: {
      layout: "blank"
    }
  },
  {
    path: "/error",
    element: <Error />,
    meta: {
      layout: "blank"
    }
  },
  {
    path: "/usuarios",
    element: <UsuariosLista />
  },
  {
    path: "/usuarios/form",
    element: <UsuariosForm />
  },
  {
    path: "/usuarios/form/:id",
    element: <UsuariosForm />
  }
]

const getRouteMeta = (route) => {
  if (isObjEmpty(route.element.props)) {
    if (route.meta) {
      return { routeMeta: route.meta }
    } else {
      return {}
    }
  }
}

// ** Return Filtered Array of Routes & Paths
const MergeLayoutRoutes = (layout, defaultLayout) => {
  const LayoutRoutes = []

  if (Routes) {
    Routes.filter((route) => {
      let isBlank = false
      // ** Checks if Route layout or Default layout matches current layout
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) &&
          defaultLayout === layout)
      ) {
        const RouteTag = PublicRoute

        // ** Check for public or private route
        if (route.meta) {
          route.meta.layout === "blank" ? (isBlank = true) : (isBlank = false)
        }
        if (route.element) {
          const Wrapper =
            // eslint-disable-next-line multiline-ternary
            isObjEmpty(route.element.props) && isBlank === false
              ? // eslint-disable-next-line multiline-ternary
                LayoutWrapper
              : Fragment

          route.element = (
            <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
              <RouteTag route={route}>{route.element}</RouteTag>
            </Wrapper>
          )
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route)
      }
      return LayoutRoutes
    })
  }
  return LayoutRoutes
}

const getRoutes = (layout) => {
  const defaultLayout = layout || "vertical"
  const layouts = ["vertical", "horizontal", "blank"]

  const AllRoutes = []

  layouts.forEach((layoutItem) => {
    const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout)

    AllRoutes.push({
      path: "/",
      element: getLayout[layoutItem] || getLayout[defaultLayout],
      children: LayoutRoutes
    })
  })
  return AllRoutes
}

export { DefaultRoute, TemplateTitle, Routes, getRoutes }
