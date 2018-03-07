const { ApplicationStatus, ApplicationType } = require('../../build/index.umd')

describe('Appications status', () => {
    it('shouldhave specific statueses', () => {
        expect(ApplicationStatus.Pending).toEqual('pending')
        expect(ApplicationStatus.Reviewing).toEqual('reviewing')
        expect(ApplicationStatus.Accepted).toEqual('accepted')
        expect(ApplicationStatus.Rejected).toEqual('rejected')

        expect(ApplicationStatus.pending).toEqual('Pending')
        expect(ApplicationStatus.reviewing).toEqual('Reviewing')
        expect(ApplicationStatus.accepted).toEqual('Accepted')
        expect(ApplicationStatus.rejected).toEqual('Rejected')

    })
})

describe('Appications type', () => {
    it('shouldhave specific statueses', () => {
        expect(ApplicationType.TravelingAbroad).toEqual(1)
    })
})