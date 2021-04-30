/* Magic Mirror Config Sample
*
* By Michael Teeuw https://michaelteeuw.nl
* MIT Licensed.
*
* For more information on how you can configure this file
* See https://github.com/MichMich/MagicMirror#configuration
*
*/

var config = {
	address: "localhost",  // Address to listen on, can be:
	// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	// - another specific IPv4/6 to listen on a specific interface
	// - "0.0.0.0", "::" to listen on any interface
	// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",     // The URL path where MagicMirror is hosted. If you are using a Reverse proxy
	// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],     // Set [] to allow all IP addresses
	// or add a specific IPv4 of 192.168.1.5 :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,      // Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",   // HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",  // HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging

	units: "imperial",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//     starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				timeFormat: 12,
				showSunTimes:true,
				lat:33.422272,
				lon:-111.822639
			}

		},
		{
			module: "MMM-Wallpaper",
			position: "fullscreen_below",
			config: { // See "Configuration options" for more information.
				source: "chromecast",
				slideInterval: 60 * 1000, // Change slides every minute
				filter: "grayscale(0.3) brightness(0.2)"
			}
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_center",
			config: {
				maximumEntries: 5,
				calendars: [
					{
						url: 'webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics'
					},
					{
						url: "https://calendar.google.com/calendar/ical/sterlinggrogg%40gmail.com/private-dc8ecb994a99b607f5f47982fc3ec501/basic.ics"              }
				]
			}
		},
		{
			module: "MMM-MonthlyCalendar",
			position: "center",
			config: { // See "Configuration options" for more information.
				mode: "nextFourWeeks",
			}
			// {
			//     module: 'calendar_monthly',
			//     position: 'top_left',
			//     config: {
			//        // The config property is optional
			//        // Without a config, a default month view is shown
			//        // Please see the 'Configuration Options' section for more information
			//     }
		},
		{
			module: "compliments",
			position: "bottom_bar"
		},
		{
			module: "weather",
			position: "top_right",
			header: "Current Weather",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				// onlyTemp: true,
				// showFeelsLike: false,
				roundTemp: true,
				showSun: false,
				weatherEndpoint: "/weather",
				locationID: "5304391", //Location ID from http://bulk.openweathermap.org/sample/city.list.json.gz
				apiKey: "bb12582b17e9732068adedf11561a1a8" //openweathermap.org API key.
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				colored: true,
				locationID: "5304391", //Location ID from http://bulk.openweathermap.org/sample/city.list.json.gz
				apiKey: "openweatherApikey" //openweathermap.org API key.
			}
		},
		// {
		//     module: "newsfeed",
		//     position: "bottom_bar",
		//     config: {
		//        feeds: [
		//           {
		//              title: "New York Times",
		//              url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
		//           }
		//        ],
		//        showSourceTitle: true,
		//        showPublishDate: true,
		//        broadcastNewsFeeds: true,
		//        broadcastNewsUpdates: true
		//     }
		// },
		{
			module: "MMM-NowPlayingOnSpotify",
			position: "bottom_left",

			config: {
				clientID: "clientId",
				clientSecret: "clientSecret",
				accessToken: "Accesstoken",
				refreshToken: "refreshtoken"
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
