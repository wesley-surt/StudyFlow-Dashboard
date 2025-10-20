import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './CardComponents.jsx'

export default function SimpleDonutChart({ subjects }) {
  const pieColors = ['#1CA8DD', '#0079E1', '#5233CB', '#1ED642', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4']
  
  const pieData = subjects.map((subject, index) => ({
    name: subject.name,
    value: subject.completedLessons,
    totalLessons: subject.totalLessons,
    percentage: Math.round((subject.completedLessons / subject.totalLessons) * 100),
    color: pieColors[index % pieColors.length]
  }))

  return (
    <Card className={'custom-border-blue'} customizedStyle={{ minWidth: '305px' }}>
      <CardHeader customizedStyle={{ textAlign: 'start', marginBottom: '1rem' }}>
        <CardTitle style={{ color: '#EFF0F4' }}>Progresso Geral</CardTitle>
      </CardHeader>
      <CardContent className={'p-0 d-flex flex-wrap align-items-center justify-content-around'}>
        <Donut pieData={pieData} />
        <ContentSummary pieData={pieData} />        
      </CardContent>
    </Card>
  );
}
253
function Donut( { pieData } ) {
  return (
    <div className='d-flex justify-content-center align-items-center col-sm-6 col-md-3'>
      <ResponsiveContainer width={180} height={180}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

function ContentSummary({ pieData }) {
  return (
    <div
    className='mt-4 col-sm-6 col-md-7'
    style={{ fontSize: '0.75rem', color: '#EFF0F4' }}>
      <h6
      className="mb-2"
      style={{ minWidth: '260px', color: '#EFF0F4', textAlign: 'start', marginBottom: '1rem' }}>Sumário por Matéria:</h6>
      <MaterialsRendering pieData={pieData} />
    </div>
  )
}

function MaterialsRendering({ pieData }) {
  return (
    <div
    className="d-grid"
    style={{
      gridTemplateColumns: '1fr',
      rowGap: '0.5rem',
      maxHeight: '8rem',
      overflowY: 'auto',
    }}>
      {pieData.map((subject, index) => (
        <div
        key={index}
        className="d-flex align-items-center justify-content-between me-3"
        style={{ fontSize: '0.75rem' }}>
          <div className="items-center gap-2" style={{ display: 'flex' }}>
            <div
            className="rounded-circle"
            style={{
              width: '0.75rem',
              height: '0.75rem',
              flexShrink: 0,
              backgroundColor: subject.color
            }}
            ></div>
            <span
            className="text-truncate"
            style={{ textAlign: 'start', color: '#EFF0F4', maxWidth: '100%', overflow: 'hidden' }}
            title={subject.name}>
              {subject.name.length > 15 
                ? subject.name.substring(0, 15) + '...' 
                : subject.name
              }
            </span>
          </div>
          <span className="text-[#D1D5DB] flex-shrink-0">
            {subject.percentage}%
          </span>
        </div>
      ))}
    </div>
  )
}