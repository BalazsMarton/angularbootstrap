import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component ({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html',

})
export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(15, 'Abc Company', 'http://builditgroup.hu', 'Ruby on Rails', 150, 120, 15, 'info@builditgroup.hu')
	proposalTwo: Proposal = new Proposal(99, 'Stb Company', 'http://builditgroup.hu', 'Ruby on Rails', 150, 120, 15, 'info@builditgroup.hu')
	proposalThree: Proposal = new Proposal(300, 'Etc Company', 'http://builditgroup.hu', 'Ruby on Rails', 150, 120, 15, 'info@builditgroup.hu')
	proposals: Proposal[]= [
		this.proposalOne, 
		this.proposalTwo, 
		this.proposalThree,
	]
}