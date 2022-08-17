'use strict';
/**
 * Time Class
 */
class Time {
	/**
	 * Constructor
	 * @param {*} p1 : hours:Number ; or String in s, ss, mss, mmss, hmmss or hhmmss
	 * @param {*} p2 : minutes:Number
	 * @param {*} p3 : seconds:Number
	 */
    constructor(p1, p2, p3) {
		switch(arguments.length){
			case 0:
				this.value = 0;
			break;
			case 1: 
				if ((typeof p1) != "string"){
					//secs
					this.value = p1 % 86400;
				}else{
					//It is a string
					var str = "";
					for (var i = 0; i < p1.length; i++){
						var c = p1.charAt(i);
						if (c >= "0" && c <= "9") str = str + c;
					}
					switch(str.length){
						case 0: //empty
							this.value = 0;
						break;
						case 1: //s
							this.value = parseInt(str);
						break;
						case 2: //ss
							this.value = parseInt(str);
						break;
						case 3: //mss
							this.value = parseInt(str.charAt(0)) * 60 + parseInt(str.charAt(1) + str.charAt(2));
						break;
						case 4: //mmss
							this.value = parseInt(str.charAt(0) + str.charAt(1)) * 60 + parseInt(str.charAt(2) + str.charAt(3));
						break;
						case 5: //hmmss
							this.value = parseInt(str.charAt(0)) * 3600 + parseInt(str.charAt(1) + str.charAt(2)) * 60 + parseInt(str.charAt(3) + str.charAt(4));
						break;
						default: //hhmmss
							this.value = (parseInt(str.charAt(0) + str.charAt(1)) * 3600 + parseInt(str.charAt(2) + str.charAt(3)) * 60 + parseInt(str.charAt(4) + str.charAt(5))) % 86400;
						break;
					}
				}
			break;
			case 2: //mins, secs
				this.value = (p1 * 60 + p2) % 86400;
			break;
			case 3: //hours, mins, secs
				this.value = (p1 * 3600 + p2 * 60 + p3) % 86400;
			break;
		}
	}
	/**
	 * 
	 * @param {*} format : time format with h, hh, m, mm, s, ss. Default is "h:mm(ss)"
	 */
	toString(format){
		if (format == null) format = "h:mm(ss)";
		format = format.toLowerCase();
		var secs = Math.floor(this.value % 60);
		var mins = Math.floor(this.value / 60) % 60;
		var hours = Math.floor(this.value / 3600) % 24;
		var str = format;
		str = str.replace("hh", (hours < 10) ? "0" + hours.toString() : hours.toString());
		str = str.replace("h", hours.toString());
		str = str.replace("mm", (mins < 10) ? "0" + mins.toString() : mins.toString());
		str = str.replace("m", mins.toString());
		str = str.replace("ss", (secs < 10) ? "0" + secs.toString() : secs.toString());
		str = str.replace("s", secs.toString());
		return str;
	}
	/**
	 * Get number of seconds from midnight
	 */
	getValue(){
		return this.value;
	}
	/**
	 * Get Hours
	 */
	getHours(){
		return Math.floor(this.value / 3600);
	}
	/**
	 * Get Hours (change 12AM - 3AM to 24 - 27)
	 */
	getHours2(){
		var h = Math.floor(this.value / 3600);
		if (h <= 3) h += 24;
		return h;
	}
	/**
	 * Get Minutes
	 */
	getMinutes(){
		return Math.floor(this.value / 60) % 60;
	}
	/**
	 * Get Seconds
	 */
	getSeconds(){
		return Math.floor(this.value) % 60;
	}
	/**
	 * 
	 * @param {*} p1 : hours / minutes / seconds
	 * @param {*} p2 : minutes / seconds
	 * @param {*} p3 : seconds
	 */
	set(p1, p2, p3){
		return new Time(getSecs(p1, p2, p3) % 86400);
	}
	/**
	 * Add
	 */
	add(p1, p2, p3){
		return new Time((this.value + getSecs(p1, p2, p3)) % 86400);
	}
	/**
	 * Subtract
	 */
	sub(p1, p2, p3){
		return new Time((this.value - getSecs(p1, p2, p3) + 86400) % 86400);
	}
	/**
	 * Multiply
	 */
	mult(multiplier){
		return new Time((this.value * multiplier) % 86400);
	}
	/**
	 * Divide Time with Factor --> Return Time
	 */
	div(p1, p2, p3){
		return (this.value / getSecs(p1, p2, p3));
	}
	/**
	 * Divide Time with Time --> Return Number
	 */
	div2(divider){
		return new Time((this.value / divider) % 86400);
	}
	/**
	 * Modulo
	 */
	modulo(p1, p2, p3){
		return new Time((this.value % getSecs(p1, p2, p3)) % 86400);
	}
	/**
	 * Rounding
	 */
	round(p1, p2, p3){
		var secs = getSecs(p1, p2, p3);
		return new Time((Math.round(this.value/secs) * secs) % 86400);
	}
	/**
	 * Flooring
	 */
	floor(p1, p2, p3){
		var secs = getSecs(p1, p2, p3);
		return new Time((Math.floor(this.value/secs) * secs) % 86400);
	}
	/**
	 * Ceiling
	 */
	ceil(p1, p2, p3){
		var secs = getSecs(p1, p2, p3);
		return new Time((Math.ceil(this.value/secs) * secs) % 86400);
	}
	/**
	 * Greater Than (considering absolute value)
	 */
	greaterThan(p1, p2, p3){
		return this.value > getSecs(p1, p2, p3);
	}
	/**
	 * Greater Or Equal To (considering absolute value)
	 */
	greaterEqual(p1, p2, p3){
		return this.value >= getSecs(p1, p2, p3);
	}
	/**
	 * Less Than (considering absolute value)
	 */
	lessThan(p1, p2, p3){
		return this.value < getSecs(p1, p2, p3);
	}
	/**
	 * Less Or Equal To (considering absolute value)
	 */
	lessEqual(p1, p2, p3){
		return this.value <= getSecs(p1, p2, p3);
	}
	/**
	 * Before (less than 12 hours in a day)
	 */
	before(p1, p2, p3){
		var diff = (getSecs(p1, p2, p3) - this.value + 86400) % 86400;
		return (diff < 43200) && (diff != 0);
	}
	/**
	 * Before Or At (less than 12 hours in a day)
	 */
	beforeOrAt(p1, p2, p3){
		var diff = (getSecs(p1, p2, p3) - this.value + 86400) % 86400;
		return (diff < 43200);
	}
	/**
	 * After (less than 12 hours in a day)
	 */
	after(p1, p2, p3){
		var diff = (this.value - getSecs(p1, p2, p3) + 86400) % 86400;
		return (diff < 43200) && (diff != 0);
	}
	/**
	 * After Or At (less than 12 hours in a day)
	 */
	afterOrAt(p1, p2, p3){
		var diff = (this.value - getSecs(p1, p2, p3) + 86400) % 86400;
		return (diff < 43200);
	}
	/**
	 * Equal
	 */
	equal(p1, p2, p3){
		return this.value == getSecs(p1, p2, p3);
	}
	/**
	 * Static : Create new Time (s or m,s or h,m,s)
	 */
	static t(p1, p2, p3){
		switch(arguments.length){
			case 1:
				return new Time(p1);
			break;
			case 2:
				return new Time(p1,p2);
			break;
			case 3:
				return new Time(p1,p2,p3);
			break;
			default:
				return new Time(0);
		}
	}
	/**
	 * Static : Create new Time (h,m or in string "hmm")
	 */
	static hm(p1, p2){
		if(arguments.length == 1){
			if ((typeof p1) != "string"){
				//hours
				return new Time(p1,0,0); //h
			}else{
				//It is a string
				var str = "";
				for (var i = 0; i < p1.length; i++){
					var c = p1.charAt(i);
					if (c >= "0" && c <= "9") str = str + c;
				}
				switch(str.length){
					case 0: //empty
						return new Time(0,0,0);
					break;
					case 1: //h
						return new Time(parseInt(str),0,0);
					break;
					case 2: //hh
						return new Time(parseInt(str),0,0);
					break;
					case 3: //mss
						return new Time(parseInt(str.charAt(0)), parseInt(str.charAt(1) + str.charAt(2)), 0);
					break;
					case 4: //mmss
						return new Time(parseInt(str.charAt(0) + str.charAt(1)), parseInt(str.charAt(2) + str.charAt(3)), 0);
					break;
					case 5: //hmmss
						return new Time(parseInt(str.charAt(0)) * 3600 + parseInt(str.charAt(1) + str.charAt(2)) * 60 + parseInt(str.charAt(3) + str.charAt(4)));
					break;
					default: //hhmmss
						return new Time((parseInt(str.charAt(0) + str.charAt(1)) * 3600 + parseInt(str.charAt(2) + str.charAt(3)) * 60 + parseInt(str.charAt(4) + str.charAt(5))) % 86400);
					break;
				}
			}
		}else{
			return new Time(p1,p2,0); //h,m
		}
	}
}

var getSecs = function(p1, p2, p3){
	if (p3 != null){ //h,m,s
		return (p1 * 3600 + p2 * 60 + p3) % 86400;
	}else if (p2 != null){ //m,s
		return (p1 * 60 + p2) % 86400;
	}else if (p1 != null){
		if (isNaN(p1)){ //Time object
			return p1.getValue();
		}else{ //s
			return p1 % 86400;
		}
	}else{ //null
		return 0;
	}
};

module.exports = Time;