import { routers } from "@configs/index";
import { DefaultLayout } from "@layouts/index";
import {
  CreatingQuestion,
  CreatingQuiz,
  Home,
  ManageQuestion,
  NotFound,
} from "@pages/index";

const routes = [
  {
    path: routers.home,
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: routers.creationQuestion,
    component: CreatingQuestion,
    layout: DefaultLayout,
  },
  {
    path: routers.managementQuestion,
    component: ManageQuestion,
    layout: DefaultLayout,
  },
  {
    path: routers.creationQuiz,
    component: CreatingQuiz,
    layout: DefaultLayout,
  },
  // {
  //   path: routers.testing,
  //   component: CreatingQuiz,
  //   layout: DefaultLayout,
  // },
  {
    path: routers.notFound,
    component: NotFound,
    layout: DefaultLayout,
  },
];

export default routes;
