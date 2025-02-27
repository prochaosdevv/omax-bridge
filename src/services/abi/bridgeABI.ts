export const bridgeABI = [
  {
    'type': 'constructor',
    'inputs': [
      {
        'name': '_owners',
        'type': 'address[]',
        'internalType': 'address[]',
      },
      {
        'name': '_ownerRequired',
        'type': 'uint256',
        'internalType': 'uint256',
      },
    ],
    'stateMutability': 'nonpayable',
  },
  {
    'type': 'function',
    'name': 'addAddress',
    'inputs': [
      {
        'name': 'class',
        'type': 'string',
        'internalType': 'string',
      },
      {
        'name': 'oneAddress',
        'type': 'address',
        'internalType': 'address',
      },
    ],
    'outputs': [
      {
        'name': '',
        'type': 'bool',
        'internalType': 'bool',
      },
    ],
    'stateMutability': 'nonpayable',
  },
  {
    'type': 'function',
    'name': 'depositNative',
    'inputs': [
      {
        'name': '_targetAddress',
        'type': 'string',
        'internalType': 'string',
      },
      {
        'name': 'chain',
        'type': 'string',
        'internalType': 'string',
      },
    ],
    'outputs': [],
    'stateMutability': 'payable',
  },
  {
    'type': 'function',
    'name': 'depositSelector',
    'inputs': [
      {
        'name': '',
        'type': 'address',
        'internalType': 'address',
      },
    ],
    'outputs': [
      {
        'name': 'selector',
        'type': 'string',
        'internalType': 'string',
      },
      {
        'name': 'isValueFirst',
        'type': 'bool',
        'internalType': 'bool',
      },
    ],
    'stateMutability': 'view',
  },
  {
    'type': 'function',
    'name': 'depositToken',
    'inputs': [
      {
        'name': '_token',
        'type': 'address',
        'internalType': 'address',
      },
      {
        'name': 'value',
        'type': 'uint256',
        'internalType': 'uint256',
      },
      {
        'name': '_targetAddress',
        'type': 'string',
        'internalType': 'string',
      },
      {
        'name': 'chain',
        'type': 'string',
        'internalType': 'string',
      },
    ],
    'outputs': [
      {
        'name': '',
        'type': 'bool',
        'internalType': 'bool',
      },
    ],
    'stateMutability': 'payable',
  },
  {
    'type': 'function',
    'name': 'dropAddress',
    'inputs': [
      {
        'name': 'class',
        'type': 'string',
        'internalType': 'string',
      },
      {
        'name': 'oneAddress',
        'type': 'address',
        'internalType': 'address',
      },
    ],
    'outputs': [
      {
        'name': '',
        'type': 'bool',
        'internalType': 'bool',
      },
    ],
    'stateMutability': 'nonpayable',
  },
  {
    'type': 'function',
    'name': 'dropTask',
    'inputs': [
      {
        'name': 'taskHash',
        'type': 'bytes32',
        'internalType': 'bytes32',
      },
    ],
    'outputs': [
      {
        'name': '',
        'type': 'bool',
        'internalType': 'bool',
      },
    ],
    'stateMutability': 'nonpayable',
  },
  {
    'type': 'function',
    'name': 'feeTo',
    'inputs': [],
    'outputs': [
      {
        'name': '',
        'type': 'address',
        'internalType': 'address',
      },
    ],
    'stateMutability': 'view',
  },
  {
    'type': 'function',
    'name': 'filledTx',
    'inputs': [
      {
        'name': '',
        'type': 'bytes32',
        'internalType': 'bytes32',
      },
    ],
    'outputs': [
      {
        'name': '',
        'type': 'bool',
        'internalType': 'bool',
      },
    ],
    'stateMutability': 'view',
  },
  {
    'type': 'function',
    'name': 'getAdminAddresses',
    'inputs': [
      {
        'name': 'class',
        'type': 'string',
        'internalType': 'string',
      },
    ],
    'outputs': [
      {
        'name': '',
        'type': 'address[]',
        'internalType': 'address[]',
      },
    ],
    'stateMutability': 'view',
  },
  {
    'type': 'function',
    'name': 'getLogicAddress',
    'inputs': [],
    'outputs': [
      {
        'name': '',
        'type': 'address',
        'internalType': 'address',
      },
    ],
    'stateMutability': 'view',
  },
  {
    'type': 'function',
    'name': 'getOperatorRequireNum',
    'inputs': [],
    'outputs': [
      {
        'name': '',
        'type': 'uint256',
        'internalType': 'uint256',
      },
    ],
    'stateMutability': 'view',
  },
  {
    'type': 'function',
    'name': 'getOwnerRequireNum',
    'inputs': [],
    'outputs': [
      {
        'name': '',
        'type': 'uint256',
        'internalType': 'uint256',
      },
    ],
    'stateMutability': 'view',
  },
  {
    'type': 'function',
    'name': 'getStoreAddress',
    'inputs': [],
    'outputs': [
      {
        'name': '',
        'type': 'address',
        'internalType': 'address',
      },
    ],
    'stateMutability': 'view',
  },
  {
    'type': 'function',
    'name': 'modifyAdminAddress',
    'inputs': [
      {
        'name': 'class',
        'type': 'string',
        'internalType': 'string',
      },
      {
        'name': 'oldAddress',
        'type': 'address',
        'internalType': 'address',
      },
      {
        'name': 'newAddress',
        'type': 'address',
        'internalType': 'address',
      },
    ],
    'outputs': [],
    'stateMutability': 'nonpayable',
  },
  {
    'type': 'function',
    'name': 'name',
    'inputs': [],
    'outputs': [
      {
        'name': '',
        'type': 'string',
        'internalType': 'string',
      },
    ],
    'stateMutability': 'view',
  },
  {
    'type': 'function',
    'name': 'pause',
    'inputs': [],
    'outputs': [],
    'stateMutability': 'nonpayable',
  },
  {
    'type': 'function',
    'name': 'paused',
    'inputs': [],
    'outputs': [
      {
        'name': '',
        'type': 'bool',
        'internalType': 'bool',
      },
    ],
    'stateMutability': 'view',
  },
  {
    'type': 'function',
    'name': 'resetRequiredNum',
    'inputs': [
      {
        'name': 'class',
        'type': 'string',
        'internalType': 'string',
      },
      {
        'name': 'requiredNum',
        'type': 'uint256',
        'internalType': 'uint256',
      },
    ],
    'outputs': [
      {
        'name': '',
        'type': 'bool',
        'internalType': 'bool',
      },
    ],
    'stateMutability': 'nonpayable',
  },
  {
    'type': 'function',
    'name': 'setDepositSelector',
    'inputs': [
      {
        'name': 'token',
        'type': 'address',
        'internalType': 'address',
      },
      {
        'name': 'method',
        'type': 'string',
        'internalType': 'string',
      },
      {
        'name': '_isValueFirst',
        'type': 'bool',
        'internalType': 'bool',
      },
    ],
    'outputs': [],
    'stateMutability': 'nonpayable',
  },
  {
    'type': 'function',
    'name': 'setFeeTo',
    'inputs': [
      {
        'name': '_feeTo',
        'type': 'address',
        'internalType': 'address',
      },
    ],
    'outputs': [],
    'stateMutability': 'nonpayable',
  },
  {
    'type': 'function',
    'name': 'setSwapFee',
    'inputs': [
      {
        'name': '_swapFee',
        'type': 'uint256',
        'internalType': 'uint256',
      },
    ],
    'outputs': [],
    'stateMutability': 'nonpayable',
  },
  {
    'type': 'function',
    'name': 'setWithdrawSelector',
    'inputs': [
      {
        'name': 'token',
        'type': 'address',
        'internalType': 'address',
      },
      {
        'name': 'method',
        'type': 'string',
        'internalType': 'string',
      },
      {
        'name': '_isValueFirst',
        'type': 'bool',
        'internalType': 'bool',
      },
    ],
    'outputs': [],
    'stateMutability': 'nonpayable',
  },
  {
    'type': 'function',
    'name': 'swapFee',
    'inputs': [],
    'outputs': [
      {
        'name': '',
        'type': 'uint256',
        'internalType': 'uint256',
      },
    ],
    'stateMutability': 'view',
  },
  {
    'type': 'function',
    'name': 'unpause',
    'inputs': [],
    'outputs': [],
    'stateMutability': 'nonpayable',
  },
  {
    'type': 'function',
    'name': 'withdrawNative',
    'inputs': [
      {
        'name': 'to',
        'type': 'address',
        'internalType': 'address payable',
      },
      {
        'name': 'value',
        'type': 'uint256',
        'internalType': 'uint256',
      },
      {
        'name': 'proof',
        'type': 'string',
        'internalType': 'string',
      },
      {
        'name': 'taskHash',
        'type': 'bytes32',
        'internalType': 'bytes32',
      },
    ],
    'outputs': [
      {
        'name': '',
        'type': 'bool',
        'internalType': 'bool',
      },
    ],
    'stateMutability': 'nonpayable',
  },
  {
    'type': 'function',
    'name': 'withdrawSelector',
    'inputs': [
      {
        'name': '',
        'type': 'address',
        'internalType': 'address',
      },
    ],
    'outputs': [
      {
        'name': 'selector',
        'type': 'string',
        'internalType': 'string',
      },
      {
        'name': 'isValueFirst',
        'type': 'bool',
        'internalType': 'bool',
      },
    ],
    'stateMutability': 'view',
  },
  {
    'type': 'function',
    'name': 'withdrawToken',
    'inputs': [
      {
        'name': '_token',
        'type': 'address',
        'internalType': 'address',
      },
      {
        'name': 'to',
        'type': 'address',
        'internalType': 'address',
      },
      {
        'name': 'value',
        'type': 'uint256',
        'internalType': 'uint256',
      },
      {
        'name': 'proof',
        'type': 'string',
        'internalType': 'string',
      },
      {
        'name': 'taskHash',
        'type': 'bytes32',
        'internalType': 'bytes32',
      },
    ],
    'outputs': [
      {
        'name': '',
        'type': 'bool',
        'internalType': 'bool',
      },
    ],
    'stateMutability': 'nonpayable',
  },
  {
    'type': 'event',
    'name': 'AdminChanged',
    'inputs': [
      {
        'name': 'TaskType',
        'type': 'string',
        'indexed': false,
        'internalType': 'string',
      },
      {
        'name': 'class',
        'type': 'string',
        'indexed': false,
        'internalType': 'string',
      },
      {
        'name': 'oldAddress',
        'type': 'address',
        'indexed': false,
        'internalType': 'address',
      },
      {
        'name': 'newAddress',
        'type': 'address',
        'indexed': false,
        'internalType': 'address',
      },
    ],
    'anonymous': false,
  },
  {
    'type': 'event',
    'name': 'AdminRequiredNumChanged',
    'inputs': [
      {
        'name': 'TaskType',
        'type': 'string',
        'indexed': false,
        'internalType': 'string',
      },
      {
        'name': 'class',
        'type': 'string',
        'indexed': false,
        'internalType': 'string',
      },
      {
        'name': 'previousNum',
        'type': 'uint256',
        'indexed': false,
        'internalType': 'uint256',
      },
      {
        'name': 'requiredNum',
        'type': 'uint256',
        'indexed': false,
        'internalType': 'uint256',
      },
    ],
    'anonymous': false,
  },
  {
    'type': 'event',
    'name': 'AdminTaskDropped',
    'inputs': [
      {
        'name': 'taskHash',
        'type': 'bytes32',
        'indexed': false,
        'internalType': 'bytes32',
      },
    ],
    'anonymous': false,
  },
  {
    'type': 'event',
    'name': 'DepositNative',
    'inputs': [
      {
        'name': 'from',
        'type': 'address',
        'indexed': true,
        'internalType': 'address',
      },
      {
        'name': 'value',
        'type': 'uint256',
        'indexed': false,
        'internalType': 'uint256',
      },
      {
        'name': 'targetAddress',
        'type': 'string',
        'indexed': false,
        'internalType': 'string',
      },
      {
        'name': 'chain',
        'type': 'string',
        'indexed': false,
        'internalType': 'string',
      },
      {
        'name': 'feeValue',
        'type': 'uint256',
        'indexed': false,
        'internalType': 'uint256',
      },
    ],
    'anonymous': false,
  },
  {
    'type': 'event',
    'name': 'DepositToken',
    'inputs': [
      {
        'name': 'from',
        'type': 'address',
        'indexed': true,
        'internalType': 'address',
      },
      {
        'name': 'value',
        'type': 'uint256',
        'indexed': false,
        'internalType': 'uint256',
      },
      {
        'name': 'token',
        'type': 'address',
        'indexed': true,
        'internalType': 'address',
      },
      {
        'name': 'targetAddress',
        'type': 'string',
        'indexed': false,
        'internalType': 'string',
      },
      {
        'name': 'chain',
        'type': 'string',
        'indexed': false,
        'internalType': 'string',
      },
      {
        'name': 'feeValue',
        'type': 'uint256',
        'indexed': false,
        'internalType': 'uint256',
      },
    ],
    'anonymous': false,
  },
  {
    'type': 'event',
    'name': 'FeeToTransferred',
    'inputs': [
      {
        'name': 'previousFeeTo',
        'type': 'address',
        'indexed': true,
        'internalType': 'address',
      },
      {
        'name': 'newFeeTo',
        'type': 'address',
        'indexed': true,
        'internalType': 'address',
      },
    ],
    'anonymous': false,
  },
  {
    'type': 'event',
    'name': 'Paused',
    'inputs': [
      {
        'name': 'account',
        'type': 'address',
        'indexed': false,
        'internalType': 'address',
      },
    ],
    'anonymous': false,
  },
  {
    'type': 'event',
    'name': 'SwapFeeChanged',
    'inputs': [
      {
        'name': 'previousSwapFee',
        'type': 'uint256',
        'indexed': true,
        'internalType': 'uint256',
      },
      {
        'name': 'newSwapFee',
        'type': 'uint256',
        'indexed': true,
        'internalType': 'uint256',
      },
    ],
    'anonymous': false,
  },
  {
    'type': 'event',
    'name': 'Unpaused',
    'inputs': [
      {
        'name': 'account',
        'type': 'address',
        'indexed': false,
        'internalType': 'address',
      },
    ],
    'anonymous': false,
  },
  {
    'type': 'event',
    'name': 'WithdrawDoneNative',
    'inputs': [
      {
        'name': 'to',
        'type': 'address',
        'indexed': true,
        'internalType': 'address',
      },
      {
        'name': 'value',
        'type': 'uint256',
        'indexed': false,
        'internalType': 'uint256',
      },
      {
        'name': 'proof',
        'type': 'string',
        'indexed': false,
        'internalType': 'string',
      },
    ],
    'anonymous': false,
  },
  {
    'type': 'event',
    'name': 'WithdrawDoneToken',
    'inputs': [
      {
        'name': 'to',
        'type': 'address',
        'indexed': true,
        'internalType': 'address',
      },
      {
        'name': 'token',
        'type': 'address',
        'indexed': true,
        'internalType': 'address',
      },
      {
        'name': 'value',
        'type': 'uint256',
        'indexed': false,
        'internalType': 'uint256',
      },
      {
        'name': 'proof',
        'type': 'string',
        'indexed': false,
        'internalType': 'string',
      },
    ],
    'anonymous': false,
  },
  {
    'type': 'event',
    'name': 'WithdrawingNative',
    'inputs': [
      {
        'name': 'to',
        'type': 'address',
        'indexed': true,
        'internalType': 'address',
      },
      {
        'name': 'value',
        'type': 'uint256',
        'indexed': false,
        'internalType': 'uint256',
      },
      {
        'name': 'proof',
        'type': 'string',
        'indexed': false,
        'internalType': 'string',
      },
    ],
    'anonymous': false,
  },
  {
    'type': 'event',
    'name': 'WithdrawingToken',
    'inputs': [
      {
        'name': 'to',
        'type': 'address',
        'indexed': true,
        'internalType': 'address',
      },
      {
        'name': 'token',
        'type': 'address',
        'indexed': true,
        'internalType': 'address',
      },
      {
        'name': 'value',
        'type': 'uint256',
        'indexed': false,
        'internalType': 'uint256',
      },
      {
        'name': 'proof',
        'type': 'string',
        'indexed': false,
        'internalType': 'string',
      },
    ],
    'anonymous': false,
  },
  {
    'type': 'error',
    'name': 'EnforcedPause',
    'inputs': [],
  },
  {
    'type': 'error',
    'name': 'ExpectedPause',
    'inputs': [],
  },
];
