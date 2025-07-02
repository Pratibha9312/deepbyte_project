$(document).ready(function() {
	getCompanyIntro();
});

function getCompanyIntro(){
	var ic_html = `<!-- Comapny Introduction -->`;

	$.getJSON('data/departmentData.json', function(data) {
		
	ic_html += `<div class="intro">
								<div class="column1">
									<h3>`+data.title+`</h3>
									<p>`+data.intro+`</p>
								</div>
								  <!-- Middle Section -->
								<div class="column2">
									<h3>`+data.serviceTitle+`</h3>
									<div class="expertise-grid">`;
									
	data.services.forEach(data => {
		ic_html +=		`
										<div class="box">
											<p>`+data.title+`</p>
											<a href=".`+data.url+`" target="_blank">
												<img src="`+data.icon+`" alt="`+data.title+` Icon" title="`+data.url+`"/>
											</a>
										</div>
									`;
	});
	
ic_html +=		`		</div>
								</div>
								<!-- Right Section -->
								<div class="column3">
										<img src="`+data.photo+`" alt="Office Hallway"/>
								</div>
						 </div>`;
						 
		$('#intro').html(ic_html);
	});
	
	getTeamData();
	
};
	
function getTeamData(){
	var td_html = `<!-- Team Data -->`;
	
	$.getJSON('data/team.json', function(data) {
		td_html += `
							<div class="employee">
								<div>
									<h3>Meet the Team</h3>
								</div>
								<div class="team-grid">`;
			
  data.forEach(data => {

		td_html +=  	`<div class="card">
										<img src="`+data.photo+`" alt="Manager"/>
										<div class="designation">`+data.position.toUpperCase()+`</div>
										<div class="name">`+data.title+` `+data.firstName+` `+data.lastName+`</div>
										<div class="overlay">
											<div class="outer-border">
												<div class="inner-border">
												  <div class="contact">
														<div class="label">Contact</div>
														<div class="contact-name">`+data.title+` `+data.firstName + ` ` + data.lastName + `</div>
														<div class="position">`+data.position+`</div>
													</div>
													<div class="details">
														 <a href="`+data.contact.profile+`" target="_blank" class="details-row">🌐 View Profile</a>
														<div class="details-row"><i class="fa fa-address-book" aria-hidden="true"></i>`+data.contact.phone+`</div>
														<a href="mailto:`+data.contact.mail+`">
															<div class="details-row"><i class="fa fa-envelope"></i>`+data.contact.mail+`</div>
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>`;			
  });
	td_html +=   ` 
						</div>
						 </div>
				`;
								
			$('#page-content').html(td_html);
	});
}

function getTeamCard(){
	
}
