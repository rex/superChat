<?php 

class Session {

	function __construct()
	{
		
	}
	
	/**
	 * Adds item to $_SESSION array
	 * 
	 * @param key: string
	 * @param val: string
	 * @return void
	 */
	public function addItem($key,$val)
	{
		$_SESSION[$key] = $val;
		return;
	}
	
	/**
	 * Removes item from $_SESSION array
	 * 
	 * @param key: string
	 * @return void
	 */
	public function delItem($key)
	{
		unset($_SESSION[$key]);
		return;
	}
	
	/**
	 * Grabs a value for a specified key
	 * 
	 * @param key: string
	 * @return string
	 */
	public function getItem($key)
	{
		return $_SESSION[$key];
	}
	
	/**
	 * Exactly the same as addItem(), used for semantics.
	 * 
	 * @param key: string
	 * @param val: string
	 * @return void
	 */
	public function modItem($key,$val)
	{
		$_SESSION[$key] = $val;
		return;
	}
	
	/**
	 * Destroys session, eradicates all data
	 * 
	 * @param void
	 * @return void
	 */
	public function sesKill()
	{
		session_destroy();
		return;
	}
}

?>