export default interface ITask {
  id: string;
  title: string;
  description: string;
  status: Status;
  priority: Priority;
  dueDate: Date;
  createdById: string;
  assignedToId: string | null;
  createdAt: Date;
  updatedAt: Date;
  completedAt: Date | null;
}

export enum Status {
  OPEN = 'open',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
}

export enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical',
}
