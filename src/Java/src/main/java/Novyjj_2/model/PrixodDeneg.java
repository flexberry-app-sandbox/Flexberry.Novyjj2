package Novyjj_2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Novyjj_2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: ПриходДенег
 */
@Entity(name = "IISNovyjj_2ПриходДенег")
@Table(schema = "public", name = "ПриходДенег")
public class PrixodDeneg {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ID")
    private Integer id;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "ТипПрихода")
    private String типприхода;

    @Column(name = "Сумма")
    private Double сумма;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klienty")
    @Convert("Klienty")
    @Column(name = "Клиенты", length = 16, unique = true, nullable = false)
    private UUID _klientyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klienty", insertable = false, updatable = false)
    private Klienty klienty;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Finansisty")
    @Convert("Finansisty")
    @Column(name = "Финансисты", length = 16, unique = true, nullable = false)
    private UUID _finansistyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Finansisty", insertable = false, updatable = false)
    private Finansisty finansisty;

    @OneToMany(mappedBy = "prixoddeneg", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<PerechenUslug> perechenuslugs;

    @OneToMany(mappedBy = "prixoddeneg", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<PerechenTovarov> perechentovarovs;


    public PrixodDeneg() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getID() {
      return id;
    }

    public void setID(Integer id) {
      this.id = id;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public String getТипПрихода() {
      return типприхода;
    }

    public void setТипПрихода(String типприхода) {
      this.типприхода = типприхода;
    }

    public Double getСумма() {
      return сумма;
    }

    public void setСумма(Double сумма) {
      this.сумма = сумма;
    }


}