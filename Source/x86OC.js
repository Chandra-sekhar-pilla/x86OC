const { ArthimeticInstructions } = require('./InstructionSet/ArithmeticInstructions/ArithmeticInstructions')
const { DataTransferInstructions } = require('./InstructionSet/DataTransferInstructions/DataTransferInstructions')
const { InstructionSetMap } = require('./InstructionSet/InstructionSetMap')

const DTI = new DataTransferInstructions()
const AI = new ArthimeticInstructions()

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})
function ask() {
    readline.question(`Enter the instruction:\n`, instruction => {
        findInstructionType(instruction.replace(/[^\w\s]/gi, ' ').split(' '))
    })
}

function findInstructionType(instructions) {
    let tempInstruction = instructions
    instructions = []
    tempInstruction.forEach(tempInst => {
        if (tempInst == '') {

        } else {
            instructions.push(tempInst)
        }
    })
    if (Array.isArray(instructions)) {
        instruction = instructions[0]
        switch (instruction) {
            case InstructionSetMap.get('DTI')[InstructionSetMap.get('DTI').indexOf(instruction)]:
                DTI.findAddressingModeAndGenOpCode(instructions);
                break;
            case InstructionSetMap.get('AI')[InstructionSetMap.get('AI').indexOf(instruction)]:
                AI.findAddressingModeAndGenOpCode(instructions);
                break;
            default:
                console.log(`Unknown instruction ${instructions[0]}`)
                break;
        }
    } else {
        if (instructions.toLowerCase() == 'quit')
            readline.close()
    }
    ask()
}
ask()