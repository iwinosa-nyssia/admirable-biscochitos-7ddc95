export interface Program {
  id: number
  slug: string
  name: string
  image: string
  shortDescription: string
  description: string
  stat: string
  statLabel: string
}

const programs: Array<Program> = [
  {
    id: 1,
    slug: 'clean-water',
    name: 'Clean Water Access',
    image: '/placeholder.png',
    shortDescription:
      'Building wells and filtration systems so families no longer walk hours for safe water.',
    description:
      'Our clean water program partners with rural communities to design, fund, and maintain wells and filtration systems. Local technicians are trained to keep every system running long after installation, so the impact outlasts our involvement. Since launching, this program has cut water-borne illness rates and freed up hours in the day that were once spent walking to distant water sources.',
    stat: '48',
    statLabel: 'wells built',
  },
  {
    id: 2,
    slug: 'education-for-all',
    name: 'Education For All',
    image: '/placeholder.png',
    shortDescription:
      'Scholarships, school supplies, and teacher training for children in underserved regions.',
    description:
      'Education For All removes the financial barriers that keep children out of the classroom. We cover school fees, provide uniforms and supplies, and invest in teacher training so classrooms are equipped to help every student succeed. We work directly with local schools to identify students most at risk of dropping out and support them through graduation.',
    stat: '1,200+',
    statLabel: 'students supported',
  },
  {
    id: 3,
    slug: 'community-health',
    name: 'Community Health Outreach',
    image: '/placeholder.png',
    shortDescription:
      'Mobile clinics and health worker training bringing basic care to remote villages.',
    description:
      'Community Health Outreach sends mobile clinics staffed by trained local health workers into areas with no permanent medical facility. We focus on preventive care, maternal health, and childhood vaccinations, and we train community members to carry basic care forward between clinic visits.',
    stat: '65',
    statLabel: 'villages reached',
  },
]

export default programs
