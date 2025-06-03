const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());  // Allows cross-origin requests (important for APIs)

const trains = [
  {
    "train_number": "54631",
    "train_name": "Patna-Ahmedabad Rajdhani",
    "source": "Patna",
    "destination": "Ahmedabad",
    "departure_time": "04:15",
    "arrival_time": "11:15",
    "duration": "7h 0m",
    "days_of_operation": ["Wed", "Sat", "Mon", "Thu", "Sun"],
    "price": {
      "AC First Class": 2193,
      "AC 2 Tier": 1864,
      "AC 3 Tier": 1425,
      "Sleeper": 717
    }
  },
  {
    "train_number": "26329",
    "train_name": "Hyderabad-Bhopal Duronto",
    "source": "Hyderabad",
    "destination": "Bhopal",
    "departure_time": "18:30",
    "arrival_time": "02:30",
    "duration": "8h 0m",
    "days_of_operation": ["Tue", "Wed", "Sun", "Fri"],
    "price": {
      "AC First Class": 2353,
      "AC 2 Tier": 2000,
      "AC 3 Tier": 1520,
      "Sleeper": 442
    }
  },
  {
    "train_number": "43297",
    "train_name": "Coimbatore-Visakhapatnam Superfast",
    "source": "Coimbatore",
    "destination": "Visakhapatnam",
    "departure_time": "07:45",
    "arrival_time": "12:30",
    "duration": "4h 45m",
    "days_of_operation": ["Fri", "Sun", "Sat", "Mon"],
    "price": {
      "AC First Class": 3450,
      "AC 2 Tier": 2932,
      "AC 3 Tier": 2242,
      "Sleeper": 581
    }
  },
  {
    "train_number": "17954",
    "train_name": "Mumbai-Delhi Express",
    "source": "Mumbai",
    "destination": "Delhi",
    "departure_time": "15:00",
    "arrival_time": "03:00",
    "duration": "12h 0m",
    "days_of_operation": ["Mon", "Tue", "Wed", "Thu", "Fri"],
    "price": {
      "AC First Class": 3100,
      "AC 2 Tier": 2635,
      "AC 3 Tier": 2015,
      "Sleeper": 640
    }
  },
  {
    "train_number": "49107",
    "train_name": "Jaipur-Lucknow Superfast",
    "source": "Jaipur",
    "destination": "Lucknow",
    "departure_time": "10:30",
    "arrival_time": "20:45",
    "duration": "10h 15m",
    "days_of_operation": ["Tue", "Thu", "Sat"],
    "price": {
      "AC First Class": 2200,
      "AC 2 Tier": 1870,
      "AC 3 Tier": 1430,
      "Sleeper": 520
    }
  },
  {
    "train_number": "35826",
    "train_name": "Kolkata-Chennai Duronto",
    "source": "Kolkata",
    "destination": "Chennai",
    "departure_time": "21:15",
    "arrival_time": "09:15",
    "duration": "12h 0m",
    "days_of_operation": ["Mon", "Wed", "Fri", "Sun"],
    "price": {
      "AC First Class": 3400,
      "AC 2 Tier": 2890,
      "AC 3 Tier": 2220,
      "Sleeper": 750
    }
  },
  {
    "train_number": "29583",
    "train_name": "Bangalore-Hyderabad Express",
    "source": "Bangalore",
    "destination": "Hyderabad",
    "departure_time": "06:00",
    "arrival_time": "14:00",
    "duration": "8h 0m",
    "days_of_operation": ["Tue", "Thu", "Sat", "Sun"],
    "price": {
      "AC First Class": 2100,
      "AC 2 Tier": 1785,
      "AC 3 Tier": 1350,
      "Sleeper": 480
    }
  },
  {
    "train_number": "67890",
    "train_name": "Pune-Ahmedabad Vande Bharat",
    "source": "Pune",
    "destination": "Ahmedabad",
    "departure_time": "13:30",
    "arrival_time": "20:00",
    "duration": "6h 30m",
    "days_of_operation": ["Mon", "Tue", "Wed", "Thu", "Fri"],
    "price": {
      "AC First Class": 3200,
      "AC 2 Tier": 2720,
      "AC 3 Tier": 2100,
      "Sleeper": 600
    }
  },
  {
    "train_number": "54876",
    "train_name": "Guwahati-Patna Rajdhani",
    "source": "Guwahati",
    "destination": "Patna",
    "departure_time": "17:15",
    "arrival_time": "02:15",
    "duration": "9h 0m",
    "days_of_operation": ["Wed", "Fri", "Sun"],
    "price": {
      "AC First Class": 2750,
      "AC 2 Tier": 2340,
      "AC 3 Tier": 1800,
      "Sleeper": 570
    }
  },
  {
    "train_number": "12345",
    "train_name": "Nagpur-Coimbatore Express",
    "source": "Nagpur",
    "destination": "Coimbatore",
    "departure_time": "09:00",
    "arrival_time": "19:30",
    "duration": "10h 30m",
    "days_of_operation": ["Tue", "Thu", "Sat"],
    "price": {
      "AC First Class": 3000,
      "AC 2 Tier": 2550,
      "AC 3 Tier": 1960,
      "Sleeper": 600
    }
  },
  {
    "train_number": "36129",
    "train_name": "Lucknow-Chandigarh Superfast",
    "source": "Lucknow",
    "destination": "Chandigarh",
    "departure_time": "08:15",
    "arrival_time": "16:45",
    "duration": "8h 30m",
    "days_of_operation": ["Mon", "Wed", "Fri", "Sun"],
    "price": {
      "AC First Class": 2300,
      "AC 2 Tier": 1955,
      "AC 3 Tier": 1465,
      "Sleeper": 540
    }
  },
  {
    "train_number": "46728",
    "train_name": "Visakhapatnam-Delhi Rajdhani",
    "source": "Visakhapatnam",
    "destination": "Delhi",
    "departure_time": "19:00",
    "arrival_time": "06:00",
    "duration": "11h 0m",
    "days_of_operation": ["Tue", "Thu", "Sat"],
    "price": {
      "AC First Class": 3400,
      "AC 2 Tier": 2890,
      "AC 3 Tier": 2230,
      "Sleeper": 720
    }
  },
  {
    "train_number": "28476",
    "train_name": "Indore-Bhopal Express",
    "source": "Indore",
    "destination": "Bhopal",
    "departure_time": "05:45",
    "arrival_time": "08:45",
    "duration": "3h 0m",
    "days_of_operation": ["Mon", "Tue", "Wed", "Thu", "Fri"],
    "price": {
      "AC First Class": 1200,
      "AC 2 Tier": 1020,
      "AC 3 Tier": 765,
      "Sleeper": 320
    }
  },
  {
    "train_number": "57891",
    "train_name": "Chandigarh-Mumbai Express",
    "source": "Chandigarh",
    "destination": "Mumbai",
    "departure_time": "14:00",
    "arrival_time": "02:00",
    "duration": "12h 0m",
    "days_of_operation": ["Tue", "Thu", "Sat"],
    "price": {
      "AC First Class": 3100,
      "AC 2 Tier": 2640,
      "AC 3 Tier": 2030,
      "Sleeper": 640
    }
  },
  {
    "train_number": "39615",
    "train_name": "Delhi-Kolkata Duronto",
    "source": "Delhi",
    "destination": "Kolkata",
    "departure_time": "16:15",
    "arrival_time": "04:15",
    "duration": "12h 0m",
    "days_of_operation": ["Mon", "Wed", "Fri", "Sun"],
    "price": {
      "AC First Class": 3500,
      "AC 2 Tier": 2950,
      "AC 3 Tier": 2280,
      "Sleeper": 750
    }
  },
  {
    "train_number": "48203",
    "train_name": "Ahmedabad-Pune Superfast",
    "source": "Ahmedabad",
    "destination": "Pune",
    "departure_time": "10:30",
    "arrival_time": "17:00",
    "duration": "6h 30m",
    "days_of_operation": ["Wed", "Fri", "Sun"],
    "price": {
      "AC First Class": 2900,
      "AC 2 Tier": 2450,
      "AC 3 Tier": 1900,
      "Sleeper": 600
    }
  },
  {
    "train_number": "36958",
    "train_name": "Bhopal-Guwahati Express",
    "source": "Bhopal",
    "destination": "Guwahati",
    "departure_time": "07:45",
    "arrival_time": "22:15",
    "duration": "14h 30m",
    "days_of_operation": ["Tue", "Thu", "Sat"],
    "price": {
      "AC First Class": 3200,
      "AC 2 Tier": 2720,
      "AC 3 Tier": 2100,
      "Sleeper": 650
    }
  },
  {
    "train_number": "52137",
    "train_name": "Chennai-Nagpur Superfast",
    "source": "Chennai",
    "destination": "Nagpur",
    "departure_time": "12:00",
    "arrival_time": "21:00",
    "duration": "9h 0m",
    "days_of_operation": ["Mon", "Wed", "Fri"],
    "price": {
      "AC First Class": 2800,
      "AC 2 Tier": 2380,
      "AC 3 Tier": 1840,
      "Sleeper": 590
    }
  },
  {
    "train_number": "48216",
    "train_name": "Jaipur-Patna Vande Bharat",
    "source": "Jaipur",
    "destination": "Patna",
    "departure_time": "06:00",
    "arrival_time": "18:00",
    "duration": "12h 0m",
    "days_of_operation": ["Mon", "Tue", "Wed", "Thu", "Fri"],
    "price": {
      "AC First Class": 3250,
      "AC 2 Tier": 2760,
      "AC 3 Tier": 2140,
      "Sleeper": 630
    }
  },
  {
    "train_number": "39520",
    "train_name": "Mumbai-Coimbatore Express",
    "source": "Mumbai",
    "destination": "Coimbatore",
    "departure_time": "22:30",
    "arrival_time": "11:00",
    "duration": "12h 30m",
    "days_of_operation": ["Tue", "Thu", "Sat"],
    "price": {
      "AC First Class": 3100,
      "AC 2 Tier": 2640,
      "AC 3 Tier": 2020,
      "Sleeper": 620
    }
  },
  {
    "train_number": "25479",
    "train_name": "Patna-Hyderabad Rajdhani",
    "source": "Patna",
    "destination": "Hyderabad",
    "departure_time": "17:00",
    "arrival_time": "04:00",
    "duration": "11h 0m",
    "days_of_operation": ["Mon", "Wed", "Fri"],
    "price": {
      "AC First Class": 3400,
      "AC 2 Tier": 2890,
      "AC 3 Tier": 2210,
      "Sleeper": 710
    }
  },
  {
    "train_number": "49285",
    "train_name": "Nagpur-Delhi Superfast",
    "source": "Nagpur",
    "destination": "Delhi",
    "departure_time": "06:30",
    "arrival_time": "15:30",
    "duration": "9h 0m",
    "days_of_operation": ["Tue", "Thu", "Sat", "Sun"],
    "price": {
      "AC First Class": 2900,
      "AC 2 Tier": 2470,
      "AC 3 Tier": 1920,
      "Sleeper": 600
    }
  },
  {
    "train_number": "37921",
    "train_name": "Guwahati-Bangalore Express",
    "source": "Guwahati",
    "destination": "Bangalore",
    "departure_time": "13:45",
    "arrival_time": "05:15",
    "duration": "15h 30m",
    "days_of_operation": ["Mon", "Wed", "Fri", "Sun"],
    "price": {
      "AC First Class": 3500,
      "AC 2 Tier": 2970,
      "AC 3 Tier": 2320,
      "Sleeper": 720
    }
  },
  {
    "train_number": "41623",
    "train_name": "Coimbatore-Lucknow Duronto",
    "source": "Coimbatore",
    "destination": "Lucknow",
    "departure_time": "21:00",
    "arrival_time": "09:00",
    "duration": "12h 0m",
    "days_of_operation": ["Tue", "Thu", "Sat"],
    "price": {
      "AC First Class": 3350,
      "AC 2 Tier": 2840,
      "AC 3 Tier": 2200,
      "Sleeper": 690
    }
  },
  {
    "train_number": "58812",
    "train_name": "Pune-Mumbai Superfast",
    "source": "Pune",
    "destination": "Mumbai",
    "departure_time": "08:00",
    "arrival_time": "10:00",
    "duration": "2h 0m",
    "days_of_operation": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    "price": {
      "AC First Class": 1000,
      "AC 2 Tier": 850,
      "AC 3 Tier": 650,
      "Sleeper": 300
    }
  },
  {
    "train_number": "37643",
    "train_name": "Bangalore-Delhi Vande Bharat",
    "source": "Bangalore",
    "destination": "Delhi",
    "departure_time": "15:30",
    "arrival_time": "03:30",
    "duration": "12h 0m",
    "days_of_operation": ["Mon", "Wed", "Fri"],
    "price": {
      "AC First Class": 3450,
      "AC 2 Tier": 2950,
      "AC 3 Tier": 2250,
      "Sleeper": 700
    }
  },
  {
    "train_number": "49276",
    "train_name": "Jaipur-Ahmedabad Express",
    "source": "Jaipur",
    "destination": "Ahmedabad",
    "departure_time": "07:15",
    "arrival_time": "14:45",
    "duration": "7h 30m",
    "days_of_operation": ["Tue", "Thu", "Sat", "Sun"],
    "price": {
      "AC First Class": 2750,
      "AC 2 Tier": 2300,
      "AC 3 Tier": 1750,
      "Sleeper": 540
    }
  },
  {
    "train_number": "36498",
    "train_name": "Lucknow-Patna Superfast",
    "source": "Lucknow",
    "destination": "Patna",
    "departure_time": "12:00",
    "arrival_time": "17:00",
    "duration": "5h 0m",
    "days_of_operation": ["Mon", "Tue", "Wed", "Thu", "Fri"],
    "price": {
      "AC First Class": 2200,
      "AC 2 Tier": 1850,
      "AC 3 Tier": 1350,
      "Sleeper": 490
    }
  },
  {
    "train_number": "48329",
    "train_name": "Chennai-Delhi Express",
    "source": "Chennai",
    "destination": "Delhi",
    "departure_time": "18:00",
    "arrival_time": "06:00",
    "duration": "12h 0m",
    "days_of_operation": ["Mon", "Wed", "Fri", "Sun"],
    "price": {
      "AC First Class": 3300,
      "AC 2 Tier": 2800,
      "AC 3 Tier": 2170,
      "Sleeper": 700
    }
  },
  {
    "train_number": "56984",
    "train_name": "Nagpur-Bhopal Rajdhani",
    "source": "Nagpur",
    "destination": "Bhopal",
    "departure_time": "05:00",
    "arrival_time": "09:00",
    "duration": "4h 0m",
    "days_of_operation": ["Tue", "Thu", "Sat"],
    "price": {
      "AC First Class": 2600,
      "AC 2 Tier": 2200,
      "AC 3 Tier": 1700,
      "Sleeper": 550
    }
  },
  {
    "train_number": "52378",
    "train_name": "Indore-Mumbai Express",
    "source": "Indore",
    "destination": "Mumbai",
    "departure_time": "14:30",
    "arrival_time": "23:00",
    "duration": "8h 30m",
    "days_of_operation": ["Mon", "Wed", "Fri", "Sun"],
    "price": {
      "AC First Class": 3200,
      "AC 2 Tier": 2720,
      "AC 3 Tier": 2080,
      "Sleeper": 680
    }
  },
  {
    "train_number": "47812",
    "train_name": "Ahmedabad-Patna Superfast",
    "source": "Ahmedabad",
    "destination": "Patna",
    "departure_time": "06:15",
    "arrival_time": "18:45",
    "duration": "12h 30m",
    "days_of_operation": ["Tue", "Thu", "Sat"],
    "price": {
      "AC First Class": 3450,
      "AC 2 Tier": 2900,
      "AC 3 Tier": 2200,
      "Sleeper": 720
    }
  },
  {
    "train_number": "34567",
    "train_name": "Bhopal-Kolkata Rajdhani",
    "source": "Bhopal",
    "destination": "Kolkata",
    "departure_time": "20:00",
    "arrival_time": "08:00",
    "duration": "12h 0m",
    "days_of_operation": ["Mon", "Wed", "Fri"],
    "price": {
      "AC First Class": 3500,
      "AC 2 Tier": 2975,
      "AC 3 Tier": 2275,
      "Sleeper": 700
    }
  },
  {
    "train_number": "42190",
    "train_name": "Visakhapatnam-Delhi Superfast",
    "source": "Visakhapatnam",
    "destination": "Delhi",
    "departure_time": "16:45",
    "arrival_time": "05:15",
    "duration": "12h 30m",
    "days_of_operation": ["Tue", "Thu", "Sat", "Sun"],
    "price": {
      "AC First Class": 3300,
      "AC 2 Tier": 2800,
      "AC 3 Tier": 2200,
      "Sleeper": 690
    }
  },
  {
    "train_number": "38945",
    "train_name": "Chandigarh-Bangalore Duronto",
    "source": "Chandigarh",
    "destination": "Bangalore",
    "departure_time": "19:00",
    "arrival_time": "07:00",
    "duration": "12h 0m",
    "days_of_operation": ["Mon", "Wed", "Fri"],
    "price": {
      "AC First Class": 3450,
      "AC 2 Tier": 2950,
      "AC 3 Tier": 2300,
      "Sleeper": 700
    }
  },
  {
    "train_number": "57432",
    "train_name": "Lucknow-Coimbatore Express",
    "source": "Lucknow",
    "destination": "Coimbatore",
    "departure_time": "13:30",
    "arrival_time": "02:30",
    "duration": "13h 0m",
    "days_of_operation": ["Tue", "Thu", "Sat"],
    "price": {
      "AC First Class": 3350,
      "AC 2 Tier": 2850,
      "AC 3 Tier": 2250,
      "Sleeper": 680
    }
  },
  {
    "train_number": "46289",
    "train_name": "Mumbai-Guwahati Express",
    "source": "Mumbai",
    "destination": "Guwahati",
    "departure_time": "17:45",
    "arrival_time": "07:15",
    "duration": "13h 30m",
    "days_of_operation": ["Mon", "Wed", "Fri", "Sun"],
    "price": {
      "AC First Class": 3500,
      "AC 2 Tier": 2950,
      "AC 3 Tier": 2300,
      "Sleeper": 720
    }
  },
  {
    "train_number": "53984",
    "train_name": "Delhi-Coimbatore Superfast",
    "source": "Delhi",
    "destination": "Coimbatore",
    "departure_time": "10:00",
    "arrival_time": "22:30",
    "duration": "12h 30m",
    "days_of_operation": ["Tue", "Thu", "Sat", "Sun"],
    "price": {
      "AC First Class": 3400,
      "AC 2 Tier": 2900,
      "AC 3 Tier": 2250,
      "Sleeper": 700
    }
  },
  {
    "train_number": "48612",
    "train_name": "Hyderabad-Ahmedabad Rajdhani",
    "source": "Hyderabad",
    "destination": "Ahmedabad",
    "departure_time": "09:15",
    "arrival_time": "19:15",
    "duration": "10h 0m",
    "days_of_operation": ["Mon", "Wed", "Fri"],
    "price": {
      "AC First Class": 3250,
      "AC 2 Tier": 2800,
      "AC 3 Tier": 2250,
      "Sleeper": 680
    }
  },
  {
    "train_number": "39578",
    "train_name": "Chennai-Patna Express",
    "source": "Chennai",
    "destination": "Patna",
    "departure_time": "15:00",
    "arrival_time": "03:00",
    "duration": "12h 0m",
    "days_of_operation": ["Tue", "Thu", "Sat"],
    "price": {
      "AC First Class": 3400,
      "AC 2 Tier": 2900,
      "AC 3 Tier": 2200,
      "Sleeper": 700
    }
  }
];

// Define an endpoint to get all trains
app.get('/api/trains', (req, res) => {
  res.json(trains);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
