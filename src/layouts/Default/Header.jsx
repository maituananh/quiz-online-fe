import routers from "@configs/routers";
import {
  faEdit,
  faFolder,
  faPlayCircle,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function HeaderLayout() {
  return (
    <div className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto space-x-6 text-blue-600">
          <NavLink className="flex items-center" to={routers.creationQuestion}>
            <FontAwesomeIcon
              icon={faPlusCircle}
              className="tab-btn px-2 py-4 text-sm font-medium whitespace-nowrap focus:outline-none active-tab"
            />
            <p>Create Question</p>
          </NavLink>

          <NavLink
            className="flex items-center"
            to={routers.managementQuestion}
          >
            <FontAwesomeIcon
              icon={faEdit}
              className="tab-btn px-2 py-4 text-sm font-medium whitespace-nowrap focus:outline-none"
            />
            <p>Manage Question</p>
          </NavLink>

          <NavLink className="flex items-center" to={routers.creationQuiz}>
            <FontAwesomeIcon
              icon={faFolder}
              className="tab-btn px-2 py-4 text-sm font-medium whitespace-nowrap focus:outline-none"
            />
            <p>Create Quiz</p>
          </NavLink>

          <NavLink className="flex items-center" to={routers.testing}>
            <FontAwesomeIcon
              icon={faPlayCircle}
              className="tab-btn px-2 py-4 text-sm font-medium whitespace-nowrap focus:outline-none"
            />
            <p>Test</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default HeaderLayout;
