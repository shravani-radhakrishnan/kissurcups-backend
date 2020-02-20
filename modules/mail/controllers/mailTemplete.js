module.exports = function (data) {
  return `<!DOCTYPE html>
	<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
		xmlns:o="urn:schemas-microsoft-com:office:office">
	
	<head>
		<meta charset="utf-8"> <!-- utf-8 works for most cases -->
		<meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
		<meta name="x-apple-disable-message-reformatting"> <!-- Disable auto-scale in iOS 10 Mail entirely -->
		<title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->
	
	
		<link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i" rel="stylesheet">
	
		<!-- CSS Reset : BEGIN -->
		<style>
			html,
			body {
				margin: 0 auto !important;
				padding: 0 !important;
				height: 100% !important;
				width: 100% !important;
				background: #f1f1f1;
			}
	
			/* What it does: Stops email clients resizing small text. */
			* {
				-ms-text-size-adjust: 100%;
				-webkit-text-size-adjust: 100%;
			}
	
			/* What it does: Centers email on Android 4.4 */
			div[style*="margin: 16px 0"] {
				margin: 0 !important;
			}
	
			/* What it does: Stops Outlook from adding extra spacing to tables. */
			table,
			td {
				mso-table-lspace: 0pt !important;
				mso-table-rspace: 0pt !important;
			}
	
			/* What it does: Fixes webkit padding issue. */
			table {
				border-spacing: 0 !important;
				border-collapse: collapse !important;
				table-layout: fixed !important;
				margin: 0 auto !important;
			}
	
			/* What it does: Uses a better rendering method when resizing images in IE. */
			img {
				-ms-interpolation-mode: bicubic;
			}
	
			/* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
			a {
				text-decoration: none;
			}
	
			/* What it does: A work-around for email clients meddling in triggered links. */
			*[x-apple-data-detectors],
			/* iOS */
			.unstyle-auto-detected-links *,
			.aBn {
				border-bottom: 0 !important;
				cursor: default !important;
				color: inherit !important;
				text-decoration: none !important;
				font-size: inherit !important;
				font-family: inherit !important;
				font-weight: inherit !important;
				line-height: inherit !important;
			}
	
			/* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
			.a6S {
				display: none !important;
				opacity: 0.01 !important;
			}
	
			/* What it does: Prevents Gmail from changing the text color in conversation threads. */
			.im {
				color: inherit !important;
			}
	
			/* If the above doesn't work, add a .g-img class to any image in question. */
			img.g-img+div {
				display: none !important;
			}
	
			/* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
			/* Create one of these media queries for each additional viewport size you'd like to fix */
	
			/* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
			@media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
				u~div .email-container {
					min-width: 320px !important;
				}
			}
	
			/* iPhone 6, 6S, 7, 8, and X */
			@media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
				u~div .email-container {
					min-width: 375px !important;
				}
			}
	
			/* iPhone 6+, 7+, and 8+ */
			@media only screen and (min-device-width: 414px) {
				u~div .email-container {
					min-width: 414px !important;
				}
			}
		</style>
	
		<!-- CSS Reset : END -->
	
		<!-- Progressive Enhancements : BEGIN -->
		<style>
			.primary {
				background: #f3a333;
			}
	
			.bg_white {
				background: #ffffff;
			}
	
			.bg_light {
				background: #fafafa;
			}
	
			.bg_black {
				background: #c5c5c5;
			}
	
			.bg_dark {
				background: rgba(0, 0, 0, .8);
			}
	
			.email-section {
				padding: 1em;
			}
	
			/*BUTTON*/
			.btn {
				padding: 10px 15px;
			}
	
			.btn.btn-primary {
				border-radius: 30px;
				background: #f3a333;
				color: #ffffff;
			}
	
	
	
			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				font-family: 'Playfair Display', serif;
				color: #000000;
				margin-top: 0;
			}
	
			body {
				font-family: 'Montserrat', sans-serif;
				font-weight: 400;
				font-size: 15px;
				line-height: 1.8;
				color: rgba(0, 0, 0, .4);
			}
	
			a {
				color: #f3a333;
			}
	
			table {}
	
			/*LOGO*/
	
			.logo h1 {
				margin: 0;
			}
	
			.logo h1 a {
				color: #000;
				font-size: 20px;
				font-weight: 700;
				text-transform: uppercase;
				font-family: 'Montserrat', sans-serif;
			}
	
			/*HERO*/
			.hero {
				position: relative;
			}
	
			.hero img {}
	
			.hero .text {
				color: rgba(255, 255, 255, .8);
			}
	
			.hero .text h2 {
				color: #ffffff;
				font-size: 30px;
				margin-bottom: 0;
			}
	
	
			/*HEADING SECTION*/
			.heading-section {}
	
			.heading-section h2 {
				color: #000000;
				font-size: 24px;
				margin-top: 0;
				line-height: 1.4;
			}
	
			.heading-section .subheading {
				margin-bottom: 20px !important;
				display: inline-block;
				font-size: 13px;
				text-transform: uppercase;
				letter-spacing: 2px;
				color: rgba(0, 0, 0, .4);
				position: relative;
			}
	
			.heading-section .subheading::after {
				position: absolute;
				left: 0;
				right: 0;
				bottom: -10px;
				content: '';
				width: 100%;
				height: 2px;
				background: #f3a333;
				margin: 0 auto;
			}
	
			.heading-section-white {
				color: rgba(255, 255, 255, .8);
			}
	
			.heading-section-white h2 {
				font-size: 28px;
				font-family:
					line-height: 1;
				padding-bottom: 0;
			}
	
			.heading-section-white h2 {
				color: #ffffff;
			}
	
			.heading-section-white .subheading {
				margin-bottom: 0;
				display: inline-block;
				font-size: 13px;
				text-transform: uppercase;
				letter-spacing: 2px;
				color: rgba(255, 255, 255, .4);
			}
	
	
			.icon {
				text-align: center;
			}
	
			.icon img {}
	
	
			/*SERVICES*/
			.text-services {
				padding: 10px 10px 0;
				text-align: center;
			}
	
			.text-services h3 {
				font-size: 20px;
			}
	
			/*BLOG*/
			.text-services .meta {
				text-transform: uppercase;
				font-size: 14px;
			}
	
			/*TESTIMONY*/
			.text-testimony .name {
				margin: 0;
			}
	
			.text-testimony .position {
				color: rgba(0, 0, 0, .3);
	
			}
	
	
			/*VIDEO*/
			.img {
				width: 100%;
				height: auto;
				position: relative;
			}
	
			.img .icon {
				position: absolute;
				top: 50%;
				left: 0;
				right: 0;
				bottom: 0;
				margin-top: -25px;
			}
	
			.img .icon a {
				display: block;
				width: 60px;
				position: absolute;
				top: 0;
				left: 50%;
				margin-left: -25px;
			}
	
	
	
			/*COUNTER*/
			.counter-text {
				text-align: center;
			}
	
			.counter-text .num {
				display: block;
				color: #ffffff;
				font-size: 34px;
				font-weight: 700;
			}
	
			.counter-text .name {
				display: block;
				color: rgba(255, 255, 255, .9);
				font-size: 13px;
			}
	
	
			/*FOOTER*/
	
			.footer {
				color: rgba(255, 255, 255, .5);
	
			}
	
			.footer .heading {
				color: #ffffff;
				font-size: 20px;
			}
	
			.footer ul {
				margin: 0;
				padding: 0;
			}
	
			.footer ul li {
				list-style: none;
				margin-bottom: 10px;
			}
	
			.footer ul li a {
				color: rgba(255, 255, 255, 1);
			}
	
	
			@media screen and (max-width: 500px) {
	
				.icon {
					text-align: left;
				}
	
				.text-services {
					padding-left: 0;
					padding-right: 20px;
					text-align: left;
				}
	
			}
		</style>
	
	
	</head>
	
	<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly;">
		<center style="width: 100%; background-color: #f1f1f1;">
			<div
				style="display: none; font-size: 1px;max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
			</div>
			<div style="max-width: 600px; margin: 0 auto;" class="email-container">
				<!-- BEGIN BODY -->
				<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
					style="margin: auto;">
					<!--      	<tr>
						<td class="bg_white logo" style="padding: 1em 2.5em; text-align: center">
							<h1><a href="#">RestoBar</a></h1>
						</td>
					</tr>-->
	
					<!--				<tr>
						<td valign="middle" class="hero" style="background-image: url(images/bg_1.jpg); background-size: cover; height: 400px;">
							<table>
								<tr>
									<td>
										<div class="text" style="padding: 0 3em; text-align: center;">
											<h2>We Serve Healthy &amp; Delicious Foods</h2>
											<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
											<p><a href="#" class="btn btn-primary">Get Your Order Here!</a></p>
										</div>
									</td>
								</tr>
							</table>
						</td>
					</tr>-->
					<tr>
						<td class="bg_white">
							<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
								<!--	          <tr>
								<td><img src="images/logo-01.png"></td>
							</tr>-->
								<tr>
									<td class="bg_dark email-section" style="text-align:center;background: #94b66a;">
										<div class="heading-section heading-section-white">
											<br><br>
											<img
												src="https://laalsadev.sgp1.digitaloceanspaces.com/mailImages/Component_tick.png">
											<h2 style="font-size: 35px;">Congratulations</h2>
											<p>Your Booking Order No #${data.otp} is Successful!</p>
										</div>
									</td>
								</tr><!-- end: tr -->
								<tr>
									<td class="bg_white email-section">
										<div class="heading-section" style="text-align: center; padding: 0 30px;">
											<h2>Dear shravani Radhakrishnan </h2>
											<p>Your booking has been successfully placed with Order No #. Will get in touch with you over the
												phone and reach your location on the scheduled date.</p>
										</div>
										<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
											<tr>

											</tr>
										</table>
									</td>
								</tr>
								<!-- <tr>
									<td class="bg_light email-section">
										<table style="width: 87%;">
	
											<tr>
												<td style="font-size: 16px;color: #434343;">
													<p>Order Details: <span style="color: rgba(0,0,0,.4)">#26568211</span></p>
													<p>Name: <span style="color: rgba(0,0,0,.4)">Mr Ranga</span></p>
													<p>Phone: <span style="color: rgba(0,0,0,.4)">9000431183</span></p>
													<p>Email: <span style="color: rgba(0,0,0,.4)">noemail@noemail.com</span></p>
													<p>No. of guests: <span style="color: rgba(0,0,0,.4)">#25</span></p>
	
													<p>Cuisine: <span style="color: rgba(0,0,0,.4)">South Indian</span></p>
													<p>Package: <span style="color: rgba(0,0,0,.4)">1 Starter</span></p>
													<p>Dishes Selected: <span style="color: rgba(0,0,0,.4)">Item1, Item2</span></p>
													<p>Special Instructions: <span style="color: rgba(0,0,0,.4)">Yes</span></p>
													<p>Location Pointer: <span style="color: rgba(0,0,0,.4)">#210, Manikonda gachibowli</span></p>
	
													<p>Address: <span style="color: rgba(0,0,0,.4)">#210, Manikonda gachibowli, hyderabad</span></p>
													<p>Event Time: <span style="color: rgba(0,0,0,.4)">10:00AM</span></p>
	
												</td>
											</tr>
										</table>
									</td>
								</tr> -->
								<tr>
									<td class="bg_white email-section">
										<div class="heading-section" style="text-align: center; padding: 0 30px;">
											<p>You can reach out to the customer support team <br>at 040-68192220 or<a
													href="mailto:connect@stoverove.com"> connect@stoverove.com</a> <br>for any queries.</p>
										</div>
										<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
											<tr>
											</tr>
										</table>
									</td>
								</tr>

							</table>
	
						</td>
					</tr><!-- end:tr -->
					<!-- 1 Column Text + Button : END -->
				</table>
				<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
					style="margin: auto;">
	
					<tr>
						<td valign="middle" class="bg_black footer email-section">
							<table>
								<tr>
									<td valign="top" width="33.333%">
										<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
											<tr>
												<td>
													<div style="text-align: left;width: 50%;float: left; color: #000; padding-top: 1%;">
														<p><span style="font-size: 22px;">Happy Dining!</span><br>
															Team Kissurcups</p>
													</div>
													
												</td>
											</tr>
										</table>
									</td>
	
								</tr>
							</table>
						</td>
					</tr>
				</table>
	
			</div>
		</center>
	</body>
	
	</html>`;
}