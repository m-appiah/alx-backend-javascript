import ClassRoom from './0-classroom.js';

/**
 *  * Initialize an array of ClassRoom instances.
 *   * @return {ClassRoom[]} An array of ClassRoom instances.
 *    */
function initializeRooms() {
	  return [
		      new ClassRoom(19),
		      new ClassRoom(20),
		      new ClassRoom(34)
		    ];
}

export default initializeRooms;
