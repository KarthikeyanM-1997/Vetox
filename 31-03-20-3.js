
	var car = {
		Dimensions : {
			length : 3500,
			width : 1600,
			height : 1490,
			wheelbase : 1360,
			turning_radius : 4.5,
			ground_clearance : 170,
			track_width : {
				front : 1405,
				rear : 1400
			}
		},
		Capacities : {
			seating : 5,
			fuel : 35
		},
		Engine : {
			type : "KB-Series",
			cyinders : 3,
			valves : 12,
			capacity : 998,
			bore : 73.0,
			stroke : 79.5,
			compression_ratio : "10:1",
			power : "67/6200 PS/rpm",
			torque : "90/3500 Nm/rpm",
			fuel_distribution : "Multipoint Injection"
		},
		Transmission : {
			type : "5-speed MT"
		},
		Chassis : {
			steering : "Rack & Pinion",
			brakes : {
				front : "ventilated disc",
				rear : "drums"
			},
			suspension : {
				front : "MacPherson strut and coil spring",
				rear : "isolated trailing link and coil spring" 
			},
			shock_absorbers : "gas filled",
			tyre : "155/80R13"
		},
		Weights : {
			min_kerb_weight : 860,
			max_kerb_weight : 880,
			gross_weight : 1320
		}
	};

	console.log(car);
