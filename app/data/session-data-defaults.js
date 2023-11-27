module.exports = {
  // Insert values here
  'common': {
    // Shared session defaults across all services??
  },
  'child-benefit': {
    'end-to-end': {
      'nino-data': 'WE896405D',
      'changed-name': 'Yes',
      'dateOfBirth':'21 03 1975',
      'confirm-address':'Yes',
      'address-over-year':'Yes',
      'tel-number':'07700900982'
    },
    'unauth': {
      // Unauth journey session defaults
    },
    'proof-of-entitlement': {
      // Proof of Entitlement journey session defaults
    },
    'portal': {
      // Portal journey session defaults
    }
  },
  'self-assessment': {
    // All Self Assessment journey sessions
  },
  'paye': {
    // All PAYE journey sessions
  }
}
