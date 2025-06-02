import { routers } from "@configs/index";
import { DefaultLayout } from "@layouts/index";
import { CreatingQuiz, Home, NotFound } from "@pages/index";

const routes = [
  {
    path: routers.home,
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: routers.creationQuiz,
    component: CreatingQuiz,
    layout: DefaultLayout,
  },
  {
    path: routers.notFound,
    component: NotFound,
    layout: DefaultLayout,
  },
];

export default routes;
