const PLACEHOLDER = 'XXX'

export const TEXTS = {
  title: 'לוח זמנים היסטורי',
  choose_datetime: 'תאריך ושעה',
  choose_operator: 'חברה מפעילה',
  operator_placeholder: 'לדוגמא: דן',
  choose_line: 'מספר קו',
  line_placeholder: 'לדוגמא: 17א',
  choose_route: `בחירת מסלול נסיעה (XXX אפשרויות)`,
  choose_stop: `בחירת תחנה (XXX אפשרויות)`,
  direction_arrow: '⟵',
  time_format: 'HH:mm:ss',
  datetime_format: 'HH:mm:ss · YYYY-MM-DD',
  loading_routes: 'מסלולי נסיעה בטעינה',
  loading_stops: 'תחנות עצירה בטעינה',
  timestamp_target: 'זמן החיפוש ⌚',
  timestamp_gtfs: 'זמן עצירה מתוכנן 🕛',
  timestamp_siri: 'זמן עצירה בפועל 🚌',
  loading_hits: 'זמני נסיעה בטעינה',
}

export const formatted = (text: string, value: string) => text.replace(PLACEHOLDER, value)