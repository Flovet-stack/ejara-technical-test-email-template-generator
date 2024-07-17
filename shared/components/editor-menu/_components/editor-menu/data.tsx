import {
  ContainerIcon,
  GalleryIcon,
  MinusIcon,
  ScreenMirroringIcon,
  SmallCapsIcon,
  SpacerIcon,
} from "@/shared/icons";
import { TextIcon } from "@/shared/icons/text-icon";
import { COMPONENT, EditorComponent } from "@/shared/types";

export const editorComponents: EditorComponent[] = [
  {
    id: "1",
    name: COMPONENT.HEADING,
    icon: <SmallCapsIcon />,
  },
  {
    id: "2",
    name: COMPONENT.TEXT,
    icon: <TextIcon />,
  },
  {
    id: "3",
    name: COMPONENT.BUTTON,
    icon: <ScreenMirroringIcon />,
  },
  {
    id: "4",
    name: COMPONENT.IMAGE,
    icon: <GalleryIcon />,
  },
  {
    id: "5",
    name: COMPONENT.DIVIDER,
    icon: <MinusIcon />,
  },
  {
    id: "6",
    name: COMPONENT.SPACER,
    icon: <SpacerIcon />,
  },
  {
    id: "7",
    name: COMPONENT.CONTAINER,
    icon: <ContainerIcon />,
  },
];
