---
id: purchase
title: Purchase / Pricing
sidebar_position: 2
sidebar_label: Purchase / Pricing
---

:::note
Please also check out our [build guide](build-guide.md) as depending on your choice for the components as there might be small extra components (e.g. screws) you will need. These are usually very accessible, meaning you could buy them from local markets.
:::

The minipad consists of a PCB, the case and analog, magnetic switches, all of which need to be purchased separately. How accessible they are may vary depending on where you live, e.g. Lekker switches might not be available for purchase in some countries or have very high shipping fees. Here's a guide on how to purchase them and the approximate pricing for each component!

If you have any questions, feel free to ask them on our [Discord](https://discord.gg/minipad). You can find the technical specifications for the components [here](technical-specifications.md).

## Pricing

As for the pricing of the PCB, there is some stuff to be noted. **Most PCB manufacturers have a minimum purchase quantity** for them, which is mostly 5-10 PCBs. Because of that, we recommend finding a group of 5 people in total in order to have the most optimal price split. Further below we have a table on what this price split might look like on the latest version of the minipad.

The same goes for the Lekker switches; They can be bought in Wooting's store in packs of 12 or 75 switches. A link to their shop can be found below. You can also use Gateron's KS-20 switches to replace Lekker switches since they are essentially the same switch, just with differen springs and colors. They are sold in Gateron's shop (but also on other platforms like AliExpress) in quantities of 35 pieces or higher, meaning depending on the amount of PCBs you are planning to populate it might be more expensive than Lekker switches since you will be having some leftovers.

The only component that does not have to be bought in higher quantities is the case. Each of the 5 people can organize purchasing their case themselves, or do it together again and possibly save on shipping fees. This is fully up to you! Further down, you can find a breakdown of what the price of the components looks like in total and what the cost per person in a group of 5 people would be, considering you purchase the components at our recommended manufacturer, [JLCPCB](https://jlcpcb.com/).

<center>
You can find the components here:<br></br>

[PCB](https://github.com/minipadkb/minipad) • [Case](https://github.com/minipadkb/minipad) • [Lekker switches](https://next.wooting.io/product/lekker-switch-linear60-12-pack) • [KS-20 switches](https://gateron.com/products/gateron-ks-20-magnetic-white-switch-set)
</center>

Here's an overview of the estimated pricing on the v1 version of the minipad featuring Wooting's Lekker switches. Please note that there can be small inaccuracies in the listed prices above due to frequent, small adjustments to part prices on the market.
  
<div className="row">
<div className="col">

<center><h3>2 Keys (unavailable on v1)</h3></center>

| **Component** | **Price** | **Effective Price per Person** |
| :-------:| :--------: | :---------: |
| 5x Case | ?€ | ?€ |
| 5x PCB | ?€ | ?€ |
| 12x Switches | 9.99€ | 2.00€ |
| **Total**| **?€** | **?€** per person |

</div>
<div className="col">

<center><h3>3 Keys</h3></center>

| **Component** | **Price** | **Effective Price per Person** |
| :-------:| :--------: | :---------: |
| 5x Case | 26.15€ | 5.23€ |
| 5x PCB | 36.96€ | 7.39€ |
| 24x Switches | 18.98€ | 3.80€ |
| **Total**| **82.09€** | **16.42€** per person |

</div>
</div>

:::note Info about the Lekker switches
Since Wooting sells Lekker switches in quantities of 12, groups building the 3-key minipad need to buy two switch packs instead, doubling the price per person but also resulting in 9 spare switches, in case someone is interested in them. (9 switches = 7.50€)
:::

## Purchase

Although the PCB can be bought at a lot of other manufacturers, we recommend [JLCPCB](https://jlcpcb.com) as they have very afforable PCB assembly, meaning you don't have to solder anything yourself! If you'd like to purchase the PCB at a different manufacturer, please make sure they support the specifications shown in the screenshots below. If you need help, you can always hit us up on our [Discord](https://discord.gg/minipad). 

As for the case, you have a lot of possibilities. If you have a good enough 3D printer at home you could print the case yourself, although you should make sure the material you are printing with is durable enough. Other than that, you can also 3D print the case at JLCPCB or any other 3D printing service. We tried all available resin printing materials and ended up recommending 8111X resin.

The Lekker switches can be simply bought in [Wooting's store](https://next.wooting.io/product/lekker-switch-linear60-12-pack), or you can make your own as mentioned in the Pricing section above.

### **Step 1**

First, head to [JLCPCB's order page](https://cart.jlcpcb.com/quote). Click the button "Add gerber file" and upload the gerber.zip file. If you haven't downloaded the PCB files yet, you can do so from our GitHub repository [here](https://github.com/minipadkb/minipad).

Once the website finished processing the gerber file, some settings should automatically be adjusted. Now, make sure to configure the PCB specifications properly, according to the screenshot below. This is important in order for the PCB to be manufactured properly. The only option that is free to choose for you is the color. You can choose any color for free, at the exchange of one more day for assembly.

![pcb-specs-light](./img/pcb-specs-light.png#light)
![pcb-specs-dark](./img/pcb-specs-dark.png#dark)

### **Step 2**

After configuring the specifications for the PCB manufacturing, scroll down to the bottom and enable "PCBA Assembly". Like before, please make sure to have the PCBA specifications configured as shown in the screenshot below.

![pcba-specs-light](./img/pcba-specs-light.png#light)
![pcba-specs-dark](./img/pcba-specs-dark.png#dark)

**Note: If you choose a green color for the PCB, the PCBA specifications allow to select an amount of PCBs that should be assembled. If you have trouble finding a group of 5 people, you can choose to only get 2 out of the 5 PCBs assembled, which reduces the cost a bit.**

Next, click on the "Confirm" button below the PCBA specifications and either log-in using a JLCPCB account or your Google account. Then, click on the "Next" button to the right of the website, right below the price. The page you are now on shows a render preview of the PCB. Nothing to do there, just click "Next" again.

### **Step 3**

This site shows two buttons, there you upload the bom.csv and cpl.csv file downloaded from the GitHub repository. These files tell JLCPCB what components are used for the PCB and how they are placed. After that is done, click "Process BOM & CPL".

![bomcpl-light](./img/bomcpl-light.png#light)
![bomcpl-dark](./img/bomcpl-dark.png#dark)

### **Step 4**

The next page shows a list of all components. If you see a component where it says "... shortfall", it means the component is currently out of stock on JLCPCB and therefore not available for PCB assembly. In this case, please contact us on Discord immediately so we can handle the situation and inform everyone. Chances are, we are already aware so make sure to check our Discord on substitutes for shortfalls on certain parts. If everything looks alright, you can proceed by clicking on "Next" again. On the next page, which shows a another render of the PCB again, you can simply click "Next" again too.

![components-light](./img/components-light.png#light)
![components-dark](./img/components-dark.png#dark)
**Note: The screenshot does not show the same components you will be seeing.**

### **Step 5**

The next page shows the details of the pricing, as well as the total pricing without the shipping fees. Below the total price, you can find a field for the product description. This field needs to be filled out properly in order to gurantee a flawless customs clearance. Please select "Programmable Controller" in the category "Research\Education\DIY\Entertainment", as shown in the screenshot.

![pcb-description-light](./img/pcb-description-light.png#light)
![pcb-description-dark](./img/pcb-description-dark.png#dark)

When everything's done, click on "Save to Cart". You will then be redirected to your shopping cart. There should be two products in your cart, one very cheap one and one more expensive one. These are the PCBs + their assembly. Proceed by clicking "Secure Checkout" on the right and follow further steps on the website. If you are having issues, feel free to ask for help on our [Discord](https://discord.gg/minipad).

## Purchasing the Case

### Step 1
Head to [JLCPCB's order page](https://3d.jlcpcb.com/3d-printing-quote), click the button "Add 3D Files" and upload the top.stl and bottom.stl file. If you haven't downloaded the Case files yet, you can do so from our GitHub repository [here](https://github.com/minipadkb/minipad).

Once the website finished processing the STL files, it will show both the top and the bottom side of the case. You can now select the material used for printing it. We highly recommend going with the resin material 8111X (SLA), since it's are very durable, has a good surface finishing and the best whiteness.

![case-specs-light](./img/case-specs-light.png#light)
![case-specs-dark](./img/case-specs-dark.png#dark) 

### Step 2

After selecting the material on both 3D models, make sure to select "Game controller Enclosure" in the category "DIYEntertainment" for the product description, as this guarantees a flawless customs clearance.

![case-description-light](./img/case-description-light.png#light)
![case-description-dark](./img/case-description-dark.png#dark)

When everything's done, click on "Save to Cart". You can enter your shopping cart at the top right of the website. There should be two products in your cart, the top side of the case and the bottom side. Proceed by clicking "Secure Checkout" on the right and follow further steps on the website. If you are having issues, feel free to ask for help on our [Discord](https://discord.gg/minipad).
