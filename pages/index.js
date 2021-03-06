import React from "react"
import Head from "next/head"

export default class Index extends React.PureComponent {
  render() {
    return (
      <>
        <Head>
          <title>ACME</title>
        </Head>
        <div className="splash">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="107"
            height="139"
            fill="none"
          >
            <rect width="80" height="80" x="13" fill="#000" rx="40" />
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="M56.1516 27.8788l-3.4546-6.0606-17.2727 30.303h6.8283l13.899-24.2424zm4.3561 7.6425l-3.4548 6.1539 2.5064 4.3971h-4.9749l-3.3959 6.0489h18.7812l-9.462-16.5999z"
              clip-rule="evenodd"
            />
            <path
              fill="#fff"
              d="M7.4375 132.656H3.32812L2.54688 135H.0546875L4.28906 123.625h2.17188L10.7188 135H8.22656l-.78906-2.344zm-3.47656-1.898h2.84375L5.375 126.5l-1.41406 4.258zm37.37816.453c-.0886 1.224-.5417 2.187-1.3594 2.891-.8125.703-1.8854 1.054-3.2188 1.054-1.4583 0-2.6067-.489-3.4453-1.468-.8333-.985-1.25-2.334-1.25-4.047v-.696c0-1.093.1927-2.057.5781-2.89.3855-.834.9349-1.472 1.6485-1.914.7187-.448 1.5521-.672 2.5-.672 1.3125 0 2.3698.351 3.1719 1.054.802.704 1.2656 1.691 1.3906 2.961h-2.3438c-.0573-.734-.263-1.265-.6172-1.593-.3489-.334-.8828-.5-1.6015-.5-.7813 0-1.3672.281-1.7578.843-.3854.558-.5834 1.425-.5938 2.602v.859c0 1.229.1849 2.128.5547 2.696.375.567.9636.851 1.7656.851.724 0 1.2631-.164 1.6172-.492.3594-.333.5651-.846.6172-1.539h2.3438zm25.4015-7.586l2.9219 8.25 2.9062-8.25h3.0782V135h-2.3516v-3.109l.2344-5.368L70.4594 135H68.85l-3.0625-8.469.2344 5.36V135h-2.3438v-11.375h3.0625zm38.5964 6.445h-4.5v3.047h5.282V135h-7.6253v-11.375h7.6093v1.898h-5.266v2.711h4.5v1.836z"
            />
          </svg>
        </div>

        <style jsx>{`
          :global(html) {
            margin: 0;
          }
          :global(body) {
            background-color: #222228;
            color: #fff;
          }

          .splash {
            opacity: 0;
            animation: fadeIn 2s ease-in-out forwards;
          }

          .splash {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
          }

          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
        `}</style>
      </>
    )
  }
}
