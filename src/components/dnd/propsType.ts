import {
  Announcements,
  CancelDrop,
  CollisionDetection,
  DragEndEvent,
  DragMoveEvent,
  DragOverEvent,
  DragStartEvent,
  Modifiers,
  ScreenReaderInstructions,
  SensorDescriptor,
} from '@dnd-kit/core';

interface Props {
  announcements?: Announcements;
  autoScroll?: boolean;
  cancelDrop?: CancelDrop;
  children?: React.ReactNode;
  collisionDetection?: CollisionDetection;
  // layoutMeasuring?: Partial<LayoutMeasuring>;
  modifiers?: Modifiers;
  screenReaderInstructions?: ScreenReaderInstructions;
  sensors?: SensorDescriptor<any>[];
  onDragStart?(event: DragStartEvent): void;
  onDragMove?(event: DragMoveEvent): void;
  onDragOver?(event: DragOverEvent): void;
  onDragEnd?(event: DragEndEvent): void;
  onDragCancel?(): void;
}
