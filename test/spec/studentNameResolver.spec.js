describe( 'studentNameResolver', function() {

	var studentNameResolver;

	it( 'resolves displayNames to first names only when no conflicts', function() {
		var students = [
			{ firstName: 'Alex', lastName: 'Quintero' },
			{ firstName: 'Paul', lastName: 'Cram' },
			{ firstName: 'Eric', lastName: 'Gibby' }
		];

		studentNameResolver.resolveDisplayNames( students );

		expect( students ).toEqual([
			{ firstName: 'Alex', lastName: 'Quintero', displayName: 'Alex' },
			{ firstName: 'Paul', lastName: 'Cram', displayName: 'Paul' },
			{ firstName: 'Eric', lastName: 'Gibby', displayName: 'Eric' }
		]);
	});

});
