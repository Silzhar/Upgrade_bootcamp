export interface Technique {
  name: string;
  damage: number;
  complexity?: 'low' | 'medium' | 'high';
  forAll: boolean;
}

const techniques: Technique[] = [
  {
    name: 'onda vital',
    damage: 400,
    complexity: 'low',
    forAll: true
  },
  {
    name: 'makankosappo',
    damage: 850,
    complexity: 'medium',
    forAll: true
  },
  {
    name: 'Taioken',
    damage: 0,
    complexity: 'low',
    forAll: true
  },
  {
    name: 'saiyajin',
    damage: 10000,
    complexity: 'medium',
    forAll: false
  },
  {
    name: 'bola genki',
    damage: 20000,
    complexity: 'high',
    forAll: true
  },
  {
    name: 'saiyajin 2',
    damage: 15000,
    complexity: 'medium',
    forAll: false
  },
  {
    name: 'saiyajin 3',
    damage: 25000,
    complexity: 'medium',
    forAll: false
  },
];

export default techniques;
