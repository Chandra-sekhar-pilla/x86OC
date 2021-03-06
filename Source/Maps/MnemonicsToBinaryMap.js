const MnemonicsToBinaryMap = new Map(
    [['XLAT', '1101 0111'],
    ['LAHF', '1001 1111'],
    ['SAHF', '1001 1110'],
    ['PUSHF', '1001 1100'],
    ['POPF', '1001 1101'],
    ['AAA', '0011 0111'],
    ['BAA', '0010 0111'],
    ['NEG', '1111 011w mod01 1rbym'],
    ['AAS', '0011 1111'],
    ['DAS', '0010 1111'],
    ['MUL', '1111 011w mod10 0rbym'],
    ['IMUL', '1111 011w mod10 1rbym'],
    ['AAM', '1101 0100 0000 1010'],
    ['DIV', '1111 011w mod11 0rbym'],
    ['IDIV', '1111 011w mod11 1rbym'],
    ['AAD', '1101 0101 0000 1010'],
    ['CBW', '1001 1000'],
    ['CWD', '1001 1001'],
    ['NOT', '1111 011w mod0 10rbym'],
    ['MOVS', '1010 010w'],
    ['CMPS', '1010 011w'],
    ['SCAS', '1010 111w'],
    ['LODS', '1010 110w'],
    ['STOS', '1010 101w'],
    ['HLT', '1111 0100'],
    ['WAIT', '1001 1011']]
)

module.exports = { MnemonicsToBinaryMap: MnemonicsToBinaryMap }