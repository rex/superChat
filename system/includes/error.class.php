<?php

class Error {
	
	public function __construct()
	{
		$this->error_level = ERROR_LEVEL;
		$this->log_location = ERROR_LOG_LOCATION;
		$this->date_format = CURRENT_DATE_FORMAT;
	}
	
	public function log($message)
	{
		if(!error_log($message . "\r\n",3,ERROR_LOG_LOCATION)) {
			die("Log entry unable to be created. Please check all settings.");
		}
	}
	
	public function fullHalt($message,$function=null,$line=null)
	{
		if(!self::log($message,$function,$line,1)) {
			die($message);
		}
	}
}
?>