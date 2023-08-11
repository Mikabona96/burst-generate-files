import * as typesCommon from '../../types';

export type AskDirectory = {
    outputPath: string
    selectedNames: typesCommon.GetSelectedName []
}

export type GetDirectories = {
    currentDirectory: string
    selectedNames: AskDirectory['selectedNames']
    outputAbsolutePath: AskDirectory['outputPath']
    debug?: boolean // todo remove
}

export type ObjectTypes = {
    name: string
    value: string
    message: string
}
