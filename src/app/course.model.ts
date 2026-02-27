export interface Course {
  id: number;
  name: string;
  duration: string;
  level: 'Básico' | 'Intermedio' | 'Avanzado';
  active: boolean;
}