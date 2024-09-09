import {sectionTopic} from "../enumerations/enums";
import styles from "../../components/section.module.scss";

const styleMapper = (topic: sectionTopic): string => {
    switch (topic) {
      case sectionTopic.None:
        return styles.none;
      case sectionTopic.About:
        return styles.about;
      case sectionTopic.Game:
        return styles.game;
      case sectionTopic.Services:
        return styles.services;
      case sectionTopic.Cloud:
        return styles.cloud;
      default:
        return styles.none;
    }
  }

  export default styleMapper;