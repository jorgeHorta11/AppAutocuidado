import { Indicator } from './indicator'

export class Diagnostic {
documentNumber: string
domainName: string
diagnosticCode: string
diagnosticName:string
diagnosticDefinition:string
nocCode:string
nocName: string
nocDefinition: string
indicatorsList: [Indicator]
nicCode: string
nicName: string
nicDefinition: string
activitiesList: [string]
}