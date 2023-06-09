import styles from './styles.module.scss'

import { useSession, signIn } from 'next-auth/react'
import { getStripeJs } from '../../services/stripe-js'

import { api } from '../../services/api'

interface SubscribeButtonProps {
  priceId: string
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession()
  async function handleSubscribe() {
    if (!session) {
      signIn('github')
      // eslint-disable-next-line no-useless-return
      return
    }
    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data
      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId })
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe Now
    </button>
  )
}
