<?php 

session_start();

/*
 * SET ERROR REPORTING LEVEL
 */				  /***/
$level		=		''		;
if(empty($level) || ($level == '')) {
	define('ERROR_LEVEL',E_ALL);
} else {
	define('ERROR_LEVEL',$level);
}
error_reporting(ERROR_LEVEL);

/*
 * Other configurable options
 */
define('CURRENT_DATE_FORMAT'	,	"Y-m-d H:i:s"	);
define('ERROR_LOG_LOCATION'		,	'logs/errorlog.log'	);
define('DEBUG_DEFAULT'			,		0			); // Toggles global log debugging. If true(1), all provided information will be logged. False(0) will disable logging.

require_once('includes/db.class.php'); // Database, Session, and Error classes are loaded here.


/**
 * superChat. The new, next generation chat system that you can embed right in your own website!
 * 
 * @package superChat
 * @author Pierce Moore
 */
class Superchat {
	
	function __construct()
	{
		$this->db = new Db();
		$this->error = new Error();
	}
	
	/**
	 * Creates a new chat in the 'chats' table, initiates the first conversation in the 'participants' table, and sends the first message through the 'messages' table.
	 * 
	 * @param recipients: int or array
	 * @param message: string
	 * @return bool
	 */
	function newChat($recipients,$message)
	{
		try {
			foreach(func_get_args() as $k=>$v) {
				if(empty($v)) {
					throw new exception("All fields required.");
				}
			}
		} catch(exception $e) {
			$log = __FUNCTION__ . ': ' . $e->getMessage();
			if( $db ) { $log .= ' ' . $this->db->getError(); }
			$this->error->log($log);
			return false;
		}
	}
}

?>