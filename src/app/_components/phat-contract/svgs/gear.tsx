import * as React from 'react'
import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 428 428"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_dd_2406_12583)">
      <circle cx={213.5} cy={214.5} r={84.5} fill="white" />
      <path
        d="M357.374 206.139L376.727 192.978C377.806 192.256 378.638 191.222 379.115 190.014C379.591 188.807 379.687 187.483 379.392 186.219L374.762 166.269C374.467 165.006 373.797 163.861 372.841 162.985C371.885 162.108 370.687 161.54 369.403 161.356L346.297 158.051C345.294 157.901 344.339 157.519 343.509 156.935C342.679 156.351 341.997 155.581 341.518 154.686L334.402 141.287C333.925 140.394 333.665 139.402 333.645 138.39C333.624 137.379 333.843 136.376 334.283 135.465L344.437 114.414C344.997 113.247 345.193 111.938 344.999 110.658C344.805 109.378 344.23 108.186 343.35 107.238L329.37 92.275C328.484 91.3306 327.334 90.6749 326.07 90.3934C324.806 90.1119 323.487 90.2177 322.284 90.6969L300.578 99.3915C299.641 99.7585 298.631 99.9025 297.628 99.812C296.626 99.7216 295.658 99.3992 294.802 98.8704L281.924 90.8309C281.073 90.2929 280.361 89.5626 279.843 88.699C279.326 87.8353 279.019 86.8623 278.947 85.8582L277.235 62.5583C277.137 61.2635 276.649 60.0285 275.836 59.0161C275.023 58.0036 273.922 57.261 272.679 56.8859L253.102 50.9307C251.863 50.5492 250.537 50.5513 249.299 50.9365C248.061 51.3218 246.968 52.0722 246.164 53.0895L231.724 71.4614C231.102 72.2587 230.3 72.8972 229.384 73.3242C228.468 73.7513 227.464 73.9548 226.453 73.9179L211.313 73.3969C210.301 73.3673 209.311 73.0982 208.423 72.6116C207.535 72.1251 206.776 71.435 206.207 70.5979L193.046 51.2434C192.323 50.1661 191.289 49.3351 190.081 48.8615C188.873 48.388 187.55 48.2944 186.287 48.5933L166.338 53.2086C165.075 53.504 163.93 54.1735 163.054 55.1297C162.177 56.0859 161.61 57.2843 161.425 58.5683L158.12 81.6747C157.971 82.6785 157.589 83.6335 157.005 84.4633C156.42 85.2931 155.65 85.9748 154.755 86.4538L141.357 93.5852C140.462 94.0568 139.47 94.312 138.459 94.3301C137.448 94.3482 136.446 94.1287 135.536 93.6894L114.485 83.5357C113.318 82.9754 112.009 82.7794 110.73 82.9733C109.45 83.1671 108.258 83.7418 107.309 84.6225L92.4217 98.6025C91.4738 99.4862 90.8157 100.636 90.5341 101.901C90.2524 103.166 90.3602 104.487 90.8435 105.689L99.5379 127.381C99.9051 128.321 100.049 129.333 99.9587 130.338C99.8682 131.343 99.5459 132.313 99.0169 133.173L90.9777 146.051C90.4433 146.905 89.7139 147.62 88.8496 148.138C87.9852 148.655 87.0103 148.961 86.0051 149.029L62.7064 150.756C61.4116 150.854 60.1767 151.341 59.1643 152.154C58.1518 152.967 57.4092 154.068 57.0342 155.311L51.0792 174.889C50.6978 176.128 50.6998 177.454 51.085 178.692C51.4703 179.93 52.2208 181.023 53.238 181.827L71.6091 196.269C72.4064 196.89 73.0448 197.692 73.4718 198.608C73.8989 199.524 74.1024 200.529 74.0655 201.539L73.5443 216.68C73.5148 217.692 73.2458 218.682 72.7592 219.57C72.2727 220.458 71.5825 221.217 70.7455 221.787L51.3918 234.948C50.3145 235.671 49.4837 236.705 49.0102 237.913C48.5367 239.121 48.4431 240.445 48.742 241.707L53.357 261.657C53.6524 262.92 54.3219 264.065 55.2781 264.941C56.2343 265.818 57.4326 266.386 58.7165 266.57L81.8218 269.875C82.8256 270.025 83.7805 270.407 84.6103 270.991C85.4401 271.575 86.1217 272.345 86.6007 273.24L93.7318 286.639C94.2035 287.534 94.4586 288.527 94.4767 289.538C94.4948 290.549 94.2753 291.55 93.8359 292.461L83.6828 313.512C83.1225 314.679 82.9265 315.988 83.1203 317.268C83.3141 318.548 83.8888 319.74 84.7695 320.688L98.7489 335.651C99.6349 336.595 100.785 337.251 102.049 337.533C103.313 337.814 104.632 337.708 105.835 337.229L127.526 328.535C128.466 328.167 129.478 328.023 130.483 328.114C131.488 328.204 132.458 328.527 133.317 329.056L146.195 337.095C147.049 337.63 147.764 338.359 148.282 339.223C148.8 340.088 149.105 341.063 149.173 342.068L150.9 365.368C150.998 366.663 151.485 367.897 152.298 368.91C153.111 369.922 154.212 370.665 155.455 371.04L175.032 376.995C176.273 377.373 177.599 377.368 178.837 376.98C180.074 376.592 181.166 375.84 181.97 374.822L196.411 356.45C197.032 355.652 197.834 355.014 198.75 354.587C199.666 354.16 200.671 353.956 201.681 353.993L216.821 354.514C217.833 354.544 218.823 354.813 219.711 355.3C220.599 355.786 221.358 356.476 221.928 357.313L235.088 376.668C235.811 377.745 236.845 378.576 238.053 379.05C239.261 379.523 240.585 379.617 241.847 379.318L261.796 374.703C263.059 374.407 264.204 373.738 265.08 372.781C265.957 371.825 266.524 370.627 266.709 369.343L270.014 346.236C270.163 345.233 270.545 344.278 271.13 343.448C271.714 342.618 272.484 341.936 273.379 341.457L286.777 334.341C287.67 333.863 288.662 333.604 289.674 333.583C290.685 333.562 291.687 333.781 292.598 334.222L313.649 344.375C314.816 344.936 316.125 345.132 317.405 344.938C318.684 344.744 319.876 344.169 320.825 343.289L335.787 329.309C336.731 328.423 337.387 327.273 337.668 326.009C337.95 324.745 337.844 323.425 337.365 322.222L328.671 300.515C328.297 299.579 328.149 298.568 328.24 297.564C328.33 296.561 328.656 295.592 329.192 294.738L337.231 281.86C337.769 281.009 338.499 280.297 339.363 279.78C340.226 279.262 341.199 278.955 342.203 278.883L365.502 277.171C366.797 277.071 368.03 276.582 369.042 275.769C370.054 274.956 370.797 273.857 371.174 272.615L377.129 253.037C377.507 251.796 377.502 250.47 377.114 249.232C376.726 247.995 375.974 246.903 374.956 246.099L356.585 231.658C355.785 231.038 355.146 230.236 354.719 229.32C354.291 228.403 354.089 227.398 354.128 226.387L354.649 211.246C354.67 210.241 354.928 209.254 355.402 208.367C355.875 207.48 356.55 206.717 357.374 206.139ZM213.993 301.111C196.765 301.111 179.923 296.002 165.599 286.43C151.274 276.858 140.11 263.253 133.517 247.336C126.924 231.419 125.199 213.904 128.56 197.006C131.921 180.108 140.217 164.587 152.399 152.404C164.581 140.221 180.102 131.925 196.999 128.564C213.896 125.202 231.41 126.928 247.327 133.521C263.243 140.114 276.848 151.279 286.419 165.604C295.99 179.93 301.099 196.771 301.099 214C301.095 237.102 291.917 259.257 275.582 275.592C259.247 291.928 237.094 301.107 213.993 301.111Z"
        fill="url(#paint0_linear_2406_12583)"
      />
      <path
        d="M213.992 302.974C196.396 302.974 179.195 297.756 164.565 287.98C149.934 278.203 138.531 264.308 131.797 248.051C125.064 231.793 123.302 213.904 126.734 196.645C130.167 179.386 138.641 163.533 151.083 151.09C163.525 138.648 179.378 130.174 196.636 126.741C213.894 123.308 231.782 125.07 248.039 131.804C264.295 138.538 278.19 149.942 287.966 164.573C297.742 179.204 302.96 196.406 302.96 214.003C302.932 237.591 293.55 260.205 276.871 276.885C260.193 293.564 237.58 302.946 213.992 302.974ZM213.992 131.627C197.701 131.627 181.775 136.458 168.229 145.51C154.683 154.561 144.125 167.427 137.89 182.479C131.656 197.531 130.025 214.094 133.203 230.073C136.381 246.053 144.226 260.731 155.746 272.251C167.266 283.772 181.944 291.617 197.922 294.796C213.901 297.974 230.463 296.343 245.515 290.108C260.566 283.873 273.431 273.315 282.482 259.768C291.534 246.222 296.365 230.295 296.365 214.003C296.341 192.163 287.655 171.224 272.212 155.78C256.77 140.337 235.832 131.65 213.992 131.627Z"
        fill="#F9F9F9"
      />
      <path
        d="M213.992 340.309C189.012 340.309 164.592 332.901 143.821 319.022C123.05 305.143 106.861 285.416 97.3017 262.335C87.742 239.255 85.2407 213.858 90.1142 189.356C94.9877 164.854 107.017 142.348 124.681 124.683C142.345 107.018 164.851 94.9883 189.351 90.1146C213.852 85.2409 239.248 87.7422 262.327 97.3024C285.407 106.863 305.133 123.052 319.011 143.824C332.89 164.596 340.298 189.016 340.298 213.998C340.258 247.486 326.938 279.591 303.26 303.27C279.582 326.949 247.479 340.27 213.992 340.309ZM213.992 115.141C194.441 115.141 175.329 120.939 159.073 131.802C142.817 142.664 130.146 158.104 122.665 176.167C115.183 194.231 113.225 214.108 117.039 233.284C120.853 252.461 130.268 270.075 144.093 283.901C157.918 297.726 175.532 307.141 194.707 310.956C213.883 314.77 233.759 312.813 251.822 305.33C269.885 297.848 285.323 285.177 296.186 268.92C307.048 252.663 312.845 233.55 312.845 213.998C312.814 187.79 302.389 162.663 283.857 144.131C265.325 125.598 240.2 115.173 213.992 115.141Z"
        fill="url(#paint1_linear_2406_12583)"
      />
      <path
        d="M375.804 244.922L357.418 230.495C356.807 230.014 356.318 229.395 355.992 228.688C355.666 227.982 355.512 227.208 355.542 226.431L356.063 211.289C356.086 210.512 356.293 209.751 356.668 209.07C357.044 208.389 357.577 207.808 358.222 207.374L377.576 194.213C378.9 193.32 379.922 192.046 380.506 190.56C381.091 189.074 381.211 187.446 380.851 185.89L376.221 165.94C375.856 164.385 375.032 162.976 373.856 161.896C372.68 160.815 371.206 160.113 369.626 159.881L346.535 156.576C345.762 156.458 345.027 156.162 344.386 155.713C343.746 155.264 343.218 154.672 342.843 153.985L335.742 140.586C335.374 139.902 335.173 139.141 335.155 138.365C335.137 137.589 335.302 136.819 335.638 136.119L345.791 115.068C346.475 113.628 346.712 112.017 346.474 110.441C346.235 108.865 345.531 107.397 344.451 106.224L330.472 91.2466C329.377 90.0855 327.958 89.2802 326.4 88.9351C324.842 88.59 323.216 88.7211 321.733 89.3112L300.042 98.0058C299.463 98.2308 298.847 98.3469 298.226 98.3482C297.295 98.3516 296.382 98.0937 295.591 97.6038L282.728 89.5791C282.072 89.1615 281.522 88.5971 281.122 87.9305C280.721 87.2639 280.481 86.5133 280.42 85.738L278.693 62.453C278.57 60.8597 277.97 59.3403 276.972 58.0924C275.974 56.8445 274.623 55.9257 273.096 55.4556L253.519 49.5003C252.765 49.2754 251.983 49.1601 251.196 49.1579C250.002 49.1527 248.821 49.4179 247.744 49.9335C246.666 50.4492 245.719 51.202 244.973 52.1355L230.547 70.5223C230.087 71.1045 229.501 71.5755 228.834 71.9002C228.166 72.225 227.434 72.3952 226.691 72.3982L211.343 71.8771C210.565 71.8551 209.804 71.6477 209.123 71.2722C208.442 70.8967 207.861 70.364 207.427 69.7184L194.267 50.3638C193.546 49.2966 192.575 48.4223 191.438 47.8175C190.301 47.2127 189.034 46.8959 187.746 46.8949C187.139 46.8889 186.534 46.9589 185.945 47.1033L165.995 51.7187C164.435 52.0724 163.019 52.893 161.937 54.0712C160.855 55.2494 160.157 56.7294 159.936 58.3141L156.631 81.4055C156.513 82.179 156.218 82.9147 155.769 83.5551C155.319 84.1956 154.728 84.7236 154.041 85.0978L140.642 92.2143C139.915 92.5911 139.109 92.7901 138.29 92.795C137.552 92.7973 136.823 92.6291 136.161 92.3036L115.125 82.2542C113.688 81.5584 112.074 81.314 110.496 81.5532C108.917 81.7924 107.448 82.5039 106.282 83.5941L91.3051 97.574C90.1371 98.6645 89.3269 100.083 88.9814 101.643C88.6359 103.204 88.7712 104.832 89.3696 106.313L98.064 127.99C98.3503 128.715 98.4631 129.496 98.3933 130.271C98.3235 131.047 98.0731 131.795 97.662 132.457L89.6377 145.32C89.2201 145.976 88.6558 146.526 87.9892 146.927C87.3226 147.327 86.572 147.567 85.7968 147.628L62.5128 149.355C60.9195 149.478 59.4002 150.078 58.1523 151.077C56.9045 152.075 55.9857 153.425 55.5156 154.953L49.5606 174.531C49.1056 176.059 49.1161 177.688 49.5908 179.21C50.0654 180.732 50.9827 182.078 52.2255 183.076L70.6115 197.518C71.2234 197.995 71.7129 198.612 72.0391 199.316C72.3654 200.02 72.5189 200.792 72.4873 201.568L71.9663 216.709C71.9442 217.486 71.7368 218.247 71.3613 218.928C70.9858 219.609 70.4533 220.191 69.8077 220.624L50.454 233.785C49.1296 234.677 48.1082 235.951 47.5257 237.438C46.9433 238.925 46.8275 240.554 47.1935 242.108L51.8086 262.058C52.1614 263.616 52.9798 265.03 54.1551 266.113C55.3304 267.195 56.807 267.894 58.3889 268.117L81.4943 271.423C82.2677 271.541 83.0033 271.836 83.6438 272.285C84.2843 272.735 84.8121 273.326 85.1863 274.013L92.3026 287.412C92.6625 288.099 92.8579 288.86 92.8734 289.635C92.8889 290.41 92.724 291.178 92.3918 291.879L82.2387 312.931C81.5551 314.37 81.3175 315.982 81.5562 317.557C81.795 319.133 82.4992 320.602 83.5786 321.774L97.5577 336.752C98.6528 337.913 100.071 338.718 101.63 339.063C103.188 339.408 104.814 339.277 106.297 338.687L127.988 329.992C128.567 329.767 129.183 329.651 129.804 329.65C130.73 329.645 131.639 329.903 132.424 330.394L145.302 338.419C145.958 338.837 146.508 339.401 146.908 340.068C147.309 340.734 147.549 341.485 147.609 342.26L149.336 365.545C149.46 367.139 150.06 368.658 151.058 369.906C152.056 371.154 153.407 372.072 154.934 372.543L174.511 378.498C175.259 378.724 176.037 378.839 176.819 378.84C178.015 378.847 179.198 378.582 180.279 378.066C181.359 377.551 182.309 376.797 183.056 375.863L197.497 357.476C197.953 356.892 198.536 356.42 199.202 356.095C199.867 355.77 200.598 355.601 201.338 355.6L216.687 356.121C217.465 356.143 218.225 356.351 218.906 356.726C219.587 357.101 220.169 357.634 220.603 358.28L233.763 377.634C234.484 378.702 235.455 379.576 236.592 380.181C237.728 380.786 238.996 381.102 240.284 381.103C240.891 381.109 241.496 381.039 242.085 380.895L262.034 376.28C263.595 375.926 265.01 375.105 266.093 373.927C267.175 372.749 267.873 371.269 268.094 369.684L271.399 346.593C271.517 345.819 271.812 345.084 272.261 344.443C272.711 343.803 273.302 343.275 273.989 342.9L287.388 335.799C288.07 335.426 288.831 335.222 289.608 335.204C290.385 335.186 291.155 335.354 291.854 335.695L312.905 345.848C314.342 346.544 315.956 346.788 317.534 346.549C319.112 346.31 320.582 345.599 321.748 344.508L336.725 330.528C337.893 329.438 338.703 328.019 339.048 326.459C339.394 324.899 339.259 323.271 338.66 321.789L329.966 300.097C329.675 299.374 329.559 298.592 329.629 297.815C329.699 297.039 329.952 296.29 330.368 295.631L338.392 282.752C338.81 282.096 339.374 281.546 340.041 281.146C340.707 280.745 341.458 280.505 342.233 280.445L365.517 278.718C367.11 278.594 368.63 277.994 369.877 276.996C371.125 275.998 372.044 274.647 372.514 273.12L378.469 253.542C378.94 252.004 378.938 250.359 378.463 248.822C377.988 247.285 377.061 245.926 375.804 244.922ZM377.055 253.036L371.1 272.614C370.723 273.856 369.98 274.955 368.968 275.768C367.956 276.581 366.722 277.069 365.428 277.169L342.129 278.882C341.125 278.954 340.152 279.261 339.288 279.778C338.425 280.296 337.694 281.008 337.156 281.859L329.117 294.737C328.582 295.591 328.255 296.559 328.165 297.563C328.074 298.567 328.222 299.578 328.596 300.514L337.29 322.221C337.77 323.424 337.875 324.743 337.594 326.007C337.312 327.272 336.657 328.422 335.712 329.308L320.75 343.288C319.802 344.168 318.61 344.743 317.33 344.937C316.05 345.131 314.742 344.935 313.575 344.374L292.524 334.221C291.613 333.78 290.611 333.561 289.599 333.582C288.587 333.603 287.595 333.862 286.703 334.34L273.304 341.456C272.41 341.935 271.639 342.617 271.055 343.447C270.471 344.277 270.089 345.232 269.94 346.235L266.635 369.371C266.45 370.655 265.882 371.854 265.006 372.81C264.129 373.766 262.985 374.436 261.722 374.731L241.772 379.347C240.51 379.645 239.187 379.552 237.979 379.078C236.771 378.605 235.737 377.774 235.014 376.696L221.853 357.342C221.284 356.505 220.524 355.815 219.637 355.328C218.749 354.842 217.759 354.573 216.747 354.543L201.606 354.022C200.596 353.985 199.592 354.188 198.675 354.616C197.759 355.043 196.957 355.681 196.336 356.478L181.895 374.85C181.092 375.869 180 376.621 178.762 377.009C177.524 377.396 176.198 377.402 174.958 377.024L155.381 371.069C154.138 370.694 153.037 369.951 152.224 368.939C151.411 367.926 150.923 366.691 150.825 365.396L149.098 342.096C149.03 341.091 148.725 340.116 148.207 339.252C147.69 338.388 146.975 337.658 146.121 337.124L133.243 329.084C132.384 328.555 131.414 328.233 130.409 328.142C129.404 328.052 128.392 328.196 127.452 328.563L105.761 337.258C104.558 337.737 103.238 337.843 101.974 337.561C100.71 337.28 99.5603 336.624 98.6743 335.68L84.6951 320.717C83.8144 319.768 83.2397 318.576 83.0459 317.297C82.8521 316.017 83.0479 314.708 83.6082 313.541L93.7615 292.489C94.2009 291.578 94.4202 290.577 94.4021 289.566C94.384 288.555 94.1289 287.563 93.6572 286.668L86.5262 273.269C86.0473 272.374 85.3657 271.604 84.5359 271.019C83.7061 270.435 82.751 270.053 81.7472 269.904L58.6272 266.643C57.3433 266.459 56.1448 265.891 55.1886 265.015C54.2325 264.138 53.5629 262.994 53.2675 261.73L48.6525 241.78C48.3536 240.518 48.4472 239.194 48.9207 237.986C49.3942 236.779 50.2252 235.744 51.3025 235.021L70.6562 221.86C71.4932 221.291 72.1832 220.531 72.6698 219.643C73.1563 218.756 73.4254 217.765 73.455 216.753L73.976 201.612C74.0129 200.602 73.8094 199.597 73.3823 198.681C72.9553 197.765 72.3169 196.963 71.5196 196.342L53.1485 181.9C52.1313 181.096 51.3809 180.004 50.9957 178.765C50.6105 177.527 50.6085 176.202 50.9899 174.962L56.9449 155.385C57.3199 154.141 58.0624 153.041 59.0748 152.228C60.0872 151.414 61.3221 150.927 62.6169 150.829L85.9158 149.102C86.921 149.034 87.8957 148.729 88.7601 148.211C89.6245 147.693 90.3538 146.978 90.8882 146.124L98.9274 133.246C99.4564 132.387 99.7787 131.417 99.8692 130.412C99.9596 129.407 99.8156 128.394 99.4485 127.455L90.7542 105.763C90.2709 104.56 90.1631 103.239 90.4447 101.974C90.7264 100.709 91.3843 99.5595 92.3322 98.6758L107.22 84.6958C108.168 83.8151 109.36 83.2404 110.64 83.0466C111.92 82.8527 113.229 83.0487 114.396 83.609L135.446 93.7627C136.357 94.202 137.358 94.4215 138.369 94.4034C139.38 94.3853 140.373 94.1301 141.267 93.6585L154.666 86.527C155.561 86.0481 156.331 85.3665 156.915 84.5366C157.499 83.7068 157.881 82.7518 158.031 81.748L161.336 58.6416C161.52 57.3577 162.088 56.1592 162.964 55.203C163.841 54.2468 164.985 53.5773 166.248 53.2819L186.198 48.6666C187.46 48.3677 188.784 48.4613 189.992 48.9349C191.199 49.4084 192.234 50.2394 192.957 51.3167L206.117 70.6712C206.686 71.5083 207.446 72.1984 208.334 72.6849C209.221 73.1715 210.212 73.4406 211.224 73.4702L226.364 73.9913C227.374 74.0281 228.379 73.8246 229.295 73.3975C230.211 72.9705 231.013 72.3321 231.634 71.5347L246.075 53.1628C246.879 52.1455 247.972 51.3951 249.21 51.0098C250.448 50.6246 251.773 50.6226 253.013 51.004L272.59 56.9593C273.833 57.3343 274.933 58.0769 275.746 59.0894C276.56 60.1019 277.047 61.3368 277.145 62.6316L278.857 85.9315C278.93 86.9356 279.237 87.9086 279.754 88.7723C280.271 89.6359 280.984 90.3662 281.835 90.9042L294.712 98.9437C295.569 99.4725 296.536 99.7949 297.539 99.8854C298.542 99.9758 299.551 99.8318 300.489 99.4648L322.195 90.7702C323.398 90.291 324.717 90.1853 325.981 90.4668C327.245 90.7482 328.395 91.4039 329.281 92.3483L343.26 107.311C344.141 108.26 344.716 109.451 344.91 110.731C345.103 112.011 344.907 113.32 344.347 114.487L334.194 135.539C333.753 136.45 333.534 137.452 333.555 138.464C333.576 139.475 333.836 140.468 334.313 141.36L341.429 154.759C341.908 155.654 342.59 156.424 343.42 157.009C344.249 157.593 345.204 157.975 346.208 158.124L369.313 161.429C370.597 161.614 371.796 162.181 372.752 163.058C373.708 163.935 374.377 165.079 374.673 166.342L379.303 186.292C379.598 187.556 379.501 188.88 379.025 190.088C378.549 191.295 377.716 192.329 376.638 193.052L357.284 206.213C356.447 206.782 355.757 207.542 355.271 208.429C354.784 209.317 354.515 210.307 354.486 211.319L353.964 226.46C353.928 227.471 354.131 228.475 354.558 229.391C354.985 230.308 355.623 231.109 356.421 231.731L374.792 246.172C375.812 246.959 376.572 248.034 376.976 249.257C377.379 250.48 377.406 251.797 377.055 253.036Z"
        fill="url(#paint2_linear_2406_12583)"
      />
    </g>
    <defs>
      <filter
        id="filter0_dd_2406_12583"
        x={26.9841}
        y={46.8945}
        width={374.07}
        height={374.211}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius={5}
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_2406_12583"
        />
        <feOffset dy={10} />
        <feGaussianBlur stdDeviation={5} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2406_12583"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius={5}
          operator="erode"
          in="SourceAlpha"
          result="effect2_dropShadow_2406_12583"
        />
        <feOffset dy={20} />
        <feGaussianBlur stdDeviation={12.5} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_2406_12583"
          result="effect2_dropShadow_2406_12583"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_2406_12583"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_2406_12583"
        x1={154.949}
        y1={70.4193}
        x2={297.79}
        y2={417.755}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EBEBEB" />
        <stop offset={1} stopColor="#BDBDBD" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2406_12583"
        x1={155.202}
        y1={98.541}
        x2={421.379}
        y2={621.268}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F9F9F9" />
        <stop offset={1} stopColor="#BDBDBD" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_2406_12583"
        x1={319.455}
        y1={76.0756}
        x2={-74.5038}
        y2={591.217}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F9F9F9" />
        <stop offset={1} stopColor="#BDBDBD" />
      </linearGradient>
    </defs>
  </svg>
)

export default SvgComponent