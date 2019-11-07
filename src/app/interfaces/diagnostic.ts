
import { DiagnosticDX } from './diagnosticDX'
import { NIC } from './nic';
import { NOC } from './noc';

export class Diagnostic {
documentNumber: string;
domainName: string;
diagnostic: DiagnosticDX;
noc: NOC;
nic: NIC;
}