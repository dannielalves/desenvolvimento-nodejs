const os = require('os')
const { execSync } = require('child_process')

// Núcleos físicos
const nucleosFisicos = execSync(
    'powershell -NoProfile -Command "(Get-CimInstance Win32_Processor | Measure-Object -Property NumberOfCores -Sum).Sum"'
).toString().trim()

// Processadores lógicos
const nucleosLogicos = os.cpus().length

console.log(`Núcleos físicos: ${nucleosFisicos}`)
console.log(`Processadores lógicos: ${nucleosLogicos}`)