import {
  ContainerIcon,
  GalleryIcon,
  MinusIcon,
  ScreenMirroringIcon,
  SmallCapsIcon,
  SpacerIcon,
} from "@/shared/icons";
import { TextIcon } from "@/shared/icons/text-icon";
import { EditorComponent } from "@/shared/types";

export const editorComponents: EditorComponent[] = [
  {
    id: "1",
    name: "text",
    icon: <TextIcon />,
  },
  {
    id: "2",
    name: "heading",
    icon: <SmallCapsIcon />,
  },
  {
    id: "3",
    name: "button",
    icon: <ScreenMirroringIcon />,
  },
  {
    id: "4",
    name: "image",
    icon: <GalleryIcon />,
  },
  {
    id: "5",
    name: "divider",
    icon: <MinusIcon />,
  },
  {
    id: "6",
    name: "spacer",
    icon: <SpacerIcon />,
  },
  {
    id: "7",
    name: "container",
    icon: <ContainerIcon />,
  },
];
