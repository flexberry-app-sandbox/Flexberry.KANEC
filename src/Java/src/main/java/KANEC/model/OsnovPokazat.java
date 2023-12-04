package KANEC.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import KANEC.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ОсновПоказат
 */
@Entity(name = "IISKANECОсновПоказат")
@Table(schema = "public", name = "ОсновПоказат")
public class OsnovPokazat {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ВыручкаОбщ")
    private Integer выручкаобщ;

    @Column(name = "Заполняемость")
    private Integer заполняемость;

    @Column(name = "СрЦена")
    private Integer срцена;

    @Column(name = "ВыручЗаОдинН")
    private Integer выручзаодинн;

    @Column(name = "ВыручЗаГостя")
    private Integer выручзагостя;

    @Column(name = "СрКолвоГостВНо")
    private Integer срколвогоствно;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Marketolog")
    @Convert("Marketolog")
    @Column(name = "Маркетолог", length = 16, unique = true, nullable = false)
    private UUID _marketologid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Marketolog", insertable = false, updatable = false)
    private Marketolog marketolog;


    public OsnovPokazat() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getВыручкаОбщ() {
      return выручкаобщ;
    }

    public void setВыручкаОбщ(Integer выручкаобщ) {
      this.выручкаобщ = выручкаобщ;
    }

    public Integer getЗаполняемость() {
      return заполняемость;
    }

    public void setЗаполняемость(Integer заполняемость) {
      this.заполняемость = заполняемость;
    }

    public Integer getСрЦена() {
      return срцена;
    }

    public void setСрЦена(Integer срцена) {
      this.срцена = срцена;
    }

    public Integer getВыручЗаОдинН() {
      return выручзаодинн;
    }

    public void setВыручЗаОдинН(Integer выручзаодинн) {
      this.выручзаодинн = выручзаодинн;
    }

    public Integer getВыручЗаГостя() {
      return выручзагостя;
    }

    public void setВыручЗаГостя(Integer выручзагостя) {
      this.выручзагостя = выручзагостя;
    }

    public Integer getСрКолвоГостВНо() {
      return срколвогоствно;
    }

    public void setСрКолвоГостВНо(Integer срколвогоствно) {
      this.срколвогоствно = срколвогоствно;
    }


}