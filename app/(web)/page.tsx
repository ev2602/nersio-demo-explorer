"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faSearch,
  faTriangleExclamation,
  faUtensils,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div>
      <FontAwesomeIcon icon={faSearch} />
      <FontAwesomeIcon icon={faInfoCircle} />
      <FontAwesomeIcon icon={faXmark} />
      <FontAwesomeIcon icon={faUtensils} />
      <FontAwesomeIcon icon={faTriangleExclamation} />
    </div>
  );
}
