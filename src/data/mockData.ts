import { Obra, Forma, ProductionItem, Priority } from '@/types/production';
import { addDays, subDays } from 'date-fns';

const today = new Date();

export const mockObras: Obra[] = [
  {
    id: '1',
    name: 'Edifício Horizonte',
    code: 'OBR-001',
    priority: 'critical',
    urgency: 'normal', // Default urgency
    deadline: addDays(today, 15),
    location: 'São Paulo, SP',
    status: 'active',
  },
  {
    id: '2',
    name: 'Condomínio Vista Verde',
    code: 'OBR-002',
    priority: 'high',
    urgency: 'normal', // Default urgency
    deadline: addDays(today, 30),
    location: 'Campinas, SP',
    status: 'active',
  },
  {
    id: '3',
    name: 'Shopping Center Norte',
    code: 'OBR-003',
    priority: 'medium',
    urgency: 'normal', // Default urgency
    deadline: addDays(today, 45),
    location: 'Guarulhos, SP',
    status: 'active',
  },
  {
    id: '4',
    name: 'Ponte Rio Negro',
    code: 'OBR-004',
    priority: 'high',
    urgency: 'normal', // Default urgency
    deadline: addDays(today, 20),
    location: 'Manaus, AM',
    status: 'active',
  },
  {
    id: '5',
    name: 'Galpão Industrial',
    code: 'OBR-005',
    priority: 'low',
    urgency: 'normal', // Default urgency
    deadline: addDays(today, 60),
    location: 'Sorocaba, SP',
    status: 'paused',
  },
];

export const mockFormas: Forma[] = [
  {
    id: 'f1',
    name: 'Viga V-40',
    code: 'FRM-V40',
    dimensions: { comprimento_max: 400, base_max: 40, altura_max: 60 }, // Updated dimensions
    capacity: 8,
    setupMinutes: 30, // Default setup
    status: 'in-use',
  },
  {
    id: 'f2',
    name: 'Pilar P-30',
    code: 'FRM-P30',
    dimensions: { comprimento_max: 300, base_max: 30, altura_max: 30 }, // Updated dimensions
    capacity: 12,
    setupMinutes: 20, // Default setup
    status: 'available',
  },
  {
    id: 'f3',
    name: 'Laje L-200',
    code: 'FRM-L200',
    dimensions: { comprimento_max: 200, base_max: 100, altura_max: 20 }, // Updated dimensions
    capacity: 4,
    setupMinutes: 45, // Default setup
    status: 'in-use',
  },
  {
    id: 'f4',
    name: 'Viga V-60',
    code: 'FRM-V60',
    dimensions: { comprimento_max: 600, base_max: 50, altura_max: 80 }, // Updated dimensions
    capacity: 6,
    setupMinutes: 35, // Default setup
    status: 'available',
  },
  {
    id: 'f5',
    name: 'Painel PA-150',
    code: 'FRM-PA150',
    dimensions: { comprimento_max: 150, base_max: 300, altura_max: 15 }, // Updated dimensions
    capacity: 10,
    setupMinutes: 25, // Default setup
    status: 'maintenance',
  },
  {
    id: 'f6',
    name: 'Pilar P-50',
    code: 'FRM-P50',
    dimensions: { comprimento_max: 500, base_max: 50, altura_max: 50 }, // Updated dimensions
    capacity: 8,
    setupMinutes: 40, // Default setup
    status: 'in-use',
  },
];

export const mockProductionItems: ProductionItem[] = [
  // Obra 1 - Critical
  {
    id: 'pi1',
    obraId: '1',
    formaId: 'f1',
    quantity: 24,
    produced: 16,
    startDate: subDays(today, 3),
    endDate: addDays(today, 2),
    priority: 'critical',
    status: 'in-progress',
    altura: 60, base: 40, comprimento: 400, tempoUnitarioMinutos: 60, // Added dimensions and time
  },
  {
    id: 'pi2',
    obraId: '1',
    formaId: 'f3',
    quantity: 12,
    produced: 0,
    startDate: addDays(today, 2),
    endDate: addDays(today, 5),
    priority: 'critical',
    status: 'pending',
    altura: 20, base: 100, comprimento: 200, tempoUnitarioMinutos: 90, // Added dimensions and time
  },
  {
    id: 'pi3',
    obraId: '1',
    formaId: 'f6',
    quantity: 20,
    produced: 8,
    startDate: subDays(today, 2),
    endDate: addDays(today, 3),
    priority: 'high',
    status: 'in-progress',
    altura: 50, base: 50, comprimento: 500, tempoUnitarioMinutos: 75, // Added dimensions and time
  },
  // Obra 2 - High
  {
    id: 'pi4',
    obraId: '2',
    formaId: 'f2',
    quantity: 36,
    produced: 0,
    startDate: addDays(today, 3),
    endDate: addDays(today, 6),
    priority: 'high',
    status: 'pending',
    altura: 30, base: 30, comprimento: 300, tempoUnitarioMinutos: 50, // Added dimensions and time
  },
  {
    id: 'pi5',
    obraId: '2',
    formaId: 'f4',
    quantity: 18,
    produced: 6,
    startDate: subDays(today, 1),
    endDate: addDays(today, 4),
    priority: 'high',
    status: 'in-progress',
    altura: 80, base: 50, comprimento: 600, tempoUnitarioMinutos: 120, // Added dimensions and time
  },
  // Obra 3 - Medium
  {
    id: 'pi6',
    obraId: '3',
    formaId: 'f1',
    quantity: 30,
    produced: 0,
    startDate: addDays(today, 5),
    endDate: addDays(today, 9),
    priority: 'medium',
    status: 'pending',
    altura: 60, base: 40, comprimento: 400, tempoUnitarioMinutos: 60, // Added dimensions and time
  },
  {
    id: 'pi7',
    obraId: '3',
    formaId: 'f5',
    quantity: 40,
    produced: 0,
    startDate: addDays(today, 7),
    endDate: addDays(today, 11),
    priority: 'medium',
    status: 'pending',
    altura: 15, base: 300, comprimento: 150, tempoUnitarioMinutos: 45, // Added dimensions and time
  },
  // Obra 4 - High
  {
    id: 'pi8',
    obraId: '4',
    formaId: 'f3',
    quantity: 16,
    produced: 4,
    startDate: subDays(today, 1),
    endDate: addDays(today, 4),
    priority: 'high',
    status: 'in-progress',
    altura: 20, base: 100, comprimento: 200, tempoUnitarioMinutos: 90, // Added dimensions and time
  },
  {
    id: 'pi9',
    obraId: '4',
    formaId: 'f2',
    quantity: 24,
    produced: 0,
    startDate: addDays(today, 4),
    endDate: addDays(today, 6),
    priority: 'medium',
    status: 'pending',
    altura: 30, base: 30, comprimento: 300, tempoUnitarioMinutos: 50, // Added dimensions and time
  },
  // Obra 5 - Low
  {
    id: 'pi10',
    obraId: '5',
    formaId: 'f4',
    quantity: 15,
    produced: 0,
    startDate: addDays(today, 10),
    endDate: addDays(today, 13),
    priority: 'low',
    status: 'pending',
    altura: 80, base: 50, comprimento: 600, tempoUnitarioMinutos: 120, // Added dimensions and time
  },
];

export const getPriorityValue = (priority: Priority): number => {
  const values: Record<Priority, number> = {
    critical: 4,
    high: 3,
    medium: 2,
    low: 1,
  };
  return values[priority];
};

export const sortByPriority = (items: ProductionItem[]): ProductionItem[] => {
  return [...items].sort((a, b) => getPriorityValue(b.priority) - getPriorityValue(a.priority));
};