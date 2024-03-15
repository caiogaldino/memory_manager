import { Strategy } from './memory/Strategy'
import { Process } from './process/Process'
import { SystemCallType } from './so/SystemCallType'
import { SystemOperation } from './so/SystemOperation'

// Examples
const systemOperation = new SystemOperation(Strategy.BEST_FIT)

const process = new Process(38)

systemOperation.systemCall(SystemCallType.WRITE_PROCESS, new Process(20))

systemOperation.systemCall(SystemCallType.WRITE_PROCESS, process)

systemOperation.systemCall(SystemCallType.WRITE_PROCESS, new Process(38))

systemOperation.systemCall(SystemCallType.WRITE_PROCESS, new Process(20))

systemOperation.systemCall(SystemCallType.CLOSE_PROCESS, process)

systemOperation.systemCall(SystemCallType.WRITE_PROCESS, new Process(8))
// systemOperation.systemCall(SystemCallType.WRITE_PROCESS, new Process(40))
