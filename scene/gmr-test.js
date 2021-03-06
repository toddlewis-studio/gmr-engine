import gmr from '../_gmr/gmr.js'
import behaviorMovable from '../behavior/moveable.js'
import prefabGreenMage from '../prefab/gmr-test.js'
import uiLogo from '../ui/logo.js'
import uiMovepad from '../ui/move-pad.js'

export default gmr.scene( ( scene, app ) => { 

  scene.addPrefab(
    prefabGreenMage
  )

  const player = scene.spawn('green-mage', [100, 100, 150, 200])
  behaviorMovable.attach( player )
  player.setSpeed( 30 )
  
  scene.loadUI( uiLogo )
  scene.loadUI( uiMovepad )

  //on pre-render
  scene.onPreRender(() => {
    player.checkUserMovement()
    // projectiles = projectiles.filter( p => p.getParent() )
    // projectiles.forEach( projectile => projectile.projectileMovement() )
  })

  scene.onPostRender(() => {
    // if( player.isTouching( doorTestTwo ) ) {
    //   gamer.closeScene()
    //   gamer.openScene( sceneTestTwo() )
    // }
  })

})