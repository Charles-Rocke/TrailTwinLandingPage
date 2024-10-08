import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from './Button'
import { PlayIcon } from './Hero'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Claim Your Spot!
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Be among the first to try Trail Twin. Sign up for the waitlist today
            and get early access to the app that’s set to transform your
            mountain biking experience. It takes less than a minute, secure your
            spot now!
          </p>
          <div className="mt-8 flex justify-center">
            {/* <AppStoreLink color="white" /> */}
            <Button href="/register" variant="solid" color="green">
              {/* <PlayIcon className="h-6 w-6 flex-none" /> */}
              <span>Get Early Access</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
