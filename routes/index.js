const routes = [
  { path: '/money-planner', icon: 'attach_money' },
  { path: '/diary-payment', icon: 'assignment' },
]

export const validatePath = (path) => {
  const searched = routes.filter(route => route.path === path)
  if (searched.length > 0) {
    return true
  }
  return false
}

export default routes