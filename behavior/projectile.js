import gmr from '../_gmr/gmr.js'

const emptyfn = () => {}
export default gmr.behavior(
  'projectile',
  {
    speed: 12,
    setSpeed: (sprite, n) => {
      sprite.speed = n
      if(sprite.target){
        sprite.projectileSpeed = [
          -((sprite.getBounds().x - sprite.target.getBounds().x) / sprite.speed),
          -((sprite.getBounds().y - sprite.target.getBounds().y) / sprite.speed)
        ]
      }
    },
    projectileSpeed: null,
    target: null,
    setTarget: (sprite, t) => {
      sprite.target = t
      if(sprite.target){
        sprite.projectileSpeed = [
          -((sprite.getBounds().x - sprite.target.getBounds().x) / sprite.speed),
          -((sprite.getBounds().y - sprite.target.getBounds().y) / sprite.speed)
        ]
      }
    },
    projectileHitFN: emptyfn,
    onProjectileHit: (sprite, fn) => sprite.projectileHitFN = fn,

    projectileMovement: sprite => {
      if(sprite.target){
        sprite.move(...sprite.projectileSpeed)
        if(sprite.isTouching( sprite.target )){
          sprite.projectileHitFN( sprite.target )
          sprite.destroy()
        }
      }
    }
  }
)